/**
 * Wholesale provider boundary. ICUK secrets never reach the browser, and price
 * calculation is intentionally separate from wholesale availability results.
 */
import { icukConfigured } from '@/lib/icuk/client';
import { icukConnectivityProvider } from './icuk';
export type Premises = { id: string; address: string; postcode: string };
export type Offer = { id: string; name: string; speedDownMbps?: number; retailPricePence?: number; quoteRequired: boolean };
export interface ConnectivityProvider {
  lookupAddresses(postcode: string): Promise<Premises[]>;
  checkAvailability(premisesId: string): Promise<Offer[]>;
}
export function getConnectivityProvider(): ConnectivityProvider | null {
  return icukConfigured() && Boolean(process.env.NETLO_LOOKUP_SIGNING_SECRET && process.env.NETLO_LOOKUP_SIGNING_SECRET.length >= 32) ? icukConnectivityProvider : null;
}
