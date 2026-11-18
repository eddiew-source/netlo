import type { ConnectivityProvider, Premises, Offer } from './provider';
import { icukGet, icukPost } from '@/lib/icuk/client';
import { signAddress, verifyAddress, normaliseAddress } from './address-token';

function object(value: unknown): Record<string, unknown> | null {
  return typeof value === 'object' && value !== null && !Array.isArray(value) ? value as Record<string, unknown> : null;
}
function describeAddress(address: Record<string, string>): string {
  const parts = [address.sub_premises, address.premises_name, [address.thoroughfare_number, address.thoroughfare_name].filter(Boolean).join(' '), address.locality, address.post_town, address.postcode];
  return parts.filter(Boolean).join(', ') || address.postcode;
}
function numeric(v: unknown): number | undefined { return typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : undefined; }

/** Read-only availability: published ICUK address + exact-match availability endpoints. */
export const icukConnectivityProvider: ConnectivityProvider = {
  async lookupAddresses(postcode: string): Promise<Premises[]> {
    const raw = object(await icukGet(`/broadband/address/${encodeURIComponent(postcode.replace(/\s/g, ''))}`));
    const results = Array.isArray(raw?.addresses) ? raw.addresses : [];
    return results.slice(0, 100).flatMap((row): Premises[] => {
      const address = normaliseAddress(row);
      return address ? [{ id: signAddress(address), address: describeAddress(address), postcode: address.postcode }] : [];
    });
  },
  async checkAvailability(premisesId: string): Promise<Offer[]> {
    const address = verifyAddress(premisesId);
    if (!address) throw new Error('Invalid or expired address selection');
    const raw = object(await icukPost('/broadband/availability', address));
    const results = Array.isArray(raw?.products) ? raw.products : [];
    return results.slice(0, 100).flatMap((row, index): Offer[] => {
      const product = object(row);
      if (!product || product.availability !== true) return [];
      const name = typeof product.name === 'string' && product.name.trim() ? product.name.slice(0, 120) : 'Broadband option';
      return [{ id: String(index), name, speedDownMbps: numeric(product.likely_down_speed), quoteRequired: true }];
    });
  },
};
