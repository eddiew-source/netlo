'use client';
import { useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { normaliseUKPostcode } from '@/lib/connectivity/postcode';
import type { Premises, Offer } from '@/lib/connectivity/provider';

type LookupState =
  | { kind: 'idle' } | { kind: 'invalid' } | { kind: 'loading' }
  | { kind: 'unavailable'; postcode: string } | { kind: 'addresses'; postcode: string; addresses: Premises[] }
  | { kind: 'checking'; postcode: string; addresses: Premises[] }
  | { kind: 'offers'; postcode: string; offers: Offer[]; address: string }
  | { kind: 'no-offers'; postcode: string };

export function AvailabilityChecker({ audience = 'business' }: { audience?: 'business' | 'home' }) {
  const [postcode, setPostcode] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');
  const [state, setState] = useState<LookupState>({ kind: 'idle' });
  const input = useRef<HTMLInputElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = normaliseUKPostcode(postcode);
    if (!clean) { setState({ kind: 'invalid' }); input.current?.focus(); return; }
    setPostcode(clean); setState({ kind: 'loading' });
    try {
      const response = await fetch('/api/addresses', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ postcode: clean }) });
      if (!response.ok) { setState({ kind: 'unavailable', postcode: clean }); return; }
      const data: unknown = await response.json();
      if (!data || typeof data !== 'object' || !('addresses' in data) || !Array.isArray(data.addresses)) throw new Error('Unexpected response');
      const addresses = (data.addresses as unknown[]).filter((a): a is Premises => Boolean(a && typeof a === 'object' && 'id' in a && 'address' in a && typeof a.id === 'string' && typeof a.address === 'string'));
      if (!addresses.length) { setState({ kind: 'no-offers', postcode: clean }); return; }
      setSelectedAddress(addresses[0].id);
      setState({ kind: 'addresses', postcode: clean, addresses });
    } catch { setState({ kind: 'unavailable', postcode: clean }); }
  }

  async function checkAddress() {
    if (state.kind !== 'addresses') return;
    const { postcode: clean, addresses } = state;
    const address = addresses.find(a => a.id === selectedAddress);
    if (!address) return;
    setState({ kind: 'checking', postcode: clean, addresses });
    try {
      const response = await fetch('/api/availability', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ premisesId: selectedAddress }) });
      if (!response.ok) throw new Error('Unavailable');
      const data: unknown = await response.json();
      if (!data || typeof data !== 'object' || !('offers' in data) || !Array.isArray(data.offers)) throw new Error('Unexpected response');
      const offers = (data.offers as unknown[]).filter((o): o is Offer => Boolean(o && typeof o === 'object' && 'name' in o && typeof o.name === 'string' && 'id' in o && typeof o.id === 'string'));
      setState(offers.length ? { kind: 'offers', postcode: clean, offers, address: address.address } : { kind: 'no-offers', postcode: clean });
    } catch { setState({ kind: 'unavailable', postcode: clean }); }
  }

  return <section className="availability" id="availability" aria-labelledby="availability-title"><div className="container">
    <div className="availability-shell">
      <div className="availability-left"><span className="availability-symbol"><Icon name="pin" /></span><div><span className="tiny-kicker">BROADBAND AVAILABILITY</span><h2 id="availability-title">What&apos;s available at your address?</h2><p>{audience === 'home' ? 'Check your home for fibre broadband options.' : 'Explore business broadband and full fibre options for your location.'}</p></div></div>
      <form className="availability-form" onSubmit={submit} noValidate><label htmlFor="postcode" className="sr-only">UK postcode</label><input ref={input} id="postcode" name="postcode" type="text" inputMode="text" autoComplete="postal-code" placeholder="Enter your postcode" value={postcode} onChange={e => { setPostcode(e.target.value); setState({ kind: 'idle' }); }} maxLength={10} aria-invalid={state.kind === 'invalid'} aria-describedby="availability-note" required/><button className="btn btn-primary" type="submit" disabled={state.kind === 'loading' || state.kind === 'checking'}>{state.kind === 'loading' ? 'Checking…' : 'Check availability'} <Icon name="arrow" /></button></form>
      <div id="availability-note" className="checker-hint"><span className="hint-dot"/>Wholesale lookups will activate once our ICUK account is connected. Manual checks are available.</div>
      {state.kind === 'invalid' && <div className="checker-result error" role="alert">Please enter a valid UK postcode, such as S70 1AA.</div>}
      {state.kind === 'addresses' && <div className="availability-address-list" role="status"><label htmlFor="netlo-address">Choose your address</label><select id="netlo-address" value={selectedAddress} onChange={event => setSelectedAddress(event.target.value)}>{state.addresses.map(a => <option key={a.id} value={a.id}>{a.address}</option>)}</select><button type="button" className="btn btn-primary" onClick={checkAddress}>See options <Icon name="arrow" /></button></div>}
      {state.kind === 'checking' && <div className="checker-result" role="status">Checking services at the selected address…</div>}
      {state.kind === 'offers' && <div className="availability-offers" role="status"><h3>Services reported for {state.address}</h3><div className="availability-offer-grid">{state.offers.map((offer, index) => <div className="availability-offer" key={`${offer.id}-${index}`}><strong>{offer.name}</strong>{typeof offer.speedDownMbps === 'number' && <span>Indicative downstream: {offer.speedDownMbps} Mbps</span>}<small>Price and eligibility to be confirmed</small></div>)}</div><p><Link className="result-link" href={`/contact?postcode=${encodeURIComponent(state.postcode)}`}>Request a quote <Icon name="arrow" /></Link></p></div>}
      {(state.kind === 'unavailable' || state.kind === 'no-offers') && <div className="checker-result" role="status"><div><strong>{state.kind === 'no-offers' ? 'No online options returned yet.' : `Need broadband in ${state.postcode}?`}</strong><span>{state.kind === 'no-offers' ? 'That does not necessarily mean your property cannot be connected.' : 'Automatic results are not available at the moment.'} We can check your options manually.</span></div><Link className="result-link" href={`/contact?postcode=${encodeURIComponent(state.postcode)}`}>Request a manual check <Icon name="arrow" /></Link></div>}
    </div>
  </div></section>;
}
