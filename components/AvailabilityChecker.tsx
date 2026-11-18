"use client";
import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { normaliseUKPostcode } from "@/lib/connectivity/postcode";

type LookupState = { kind: "idle" } | { kind: "invalid" } | { kind: "loading" } | { kind: "offline"; postcode: string };
export function AvailabilityChecker() {
  const [postcode, setPostcode] = useState("");
  const [state, setState] = useState<LookupState>({ kind: "idle" });
  const input = useRef<HTMLInputElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalised = normaliseUKPostcode(postcode);
    if (!normalised) { setState({ kind: "invalid" }); input.current?.focus(); return; }
    setPostcode(normalised); setState({ kind: "loading" });
    try {
      const response = await fetch("/api/addresses", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ postcode: normalised }) });
      // The address selection flow will be implemented after ICUK API access.
      // Until then, failures and disabled responses must never look like real results.
      if (!response.ok) { setState({ kind: "offline", postcode: normalised }); return; }
      setState({ kind: "offline", postcode: normalised });
    } catch { setState({ kind: "offline", postcode: normalised }); }
  }
  return <section className="availability" id="availability" aria-labelledby="availability-title"><div className="container">
    <div className="availability-shell">
      <div className="availability-left"><span className="availability-symbol"><Icon name="pin" /></span><div><span className="tiny-kicker">BROADBAND AVAILABILITY</span><h2 id="availability-title">What&apos;s available at your address?</h2><p>Business broadband, full fibre and leased-line options.</p></div></div>
      <form className="availability-form" onSubmit={submit} noValidate><label htmlFor="postcode" className="sr-only">UK postcode</label><input ref={input} id="postcode" name="postcode" type="text" inputMode="text" autoComplete="postal-code" placeholder="Enter your postcode" value={postcode} onChange={e => { setPostcode(e.target.value); setState({ kind: "idle" }); }} maxLength={10} aria-invalid={state.kind === "invalid"} aria-describedby="availability-note" required/><button className="btn btn-primary" type="submit" disabled={state.kind === "loading"}>{state.kind === "loading" ? "Checking…" : "Check availability"} <Icon name="arrow" /></button></form>
      <div id="availability-note" className="checker-hint"><span className="hint-dot"/>Live postcode results are coming soon. You can still request a manual check.</div>
      {state.kind === "invalid" && <div className="checker-result error" role="alert"><Icon name="pin" /> Please enter a valid UK postcode, such as S70 1AA.</div>}
      {state.kind === "offline" && <div className="checker-result" role="status"><div><strong>We can help with {state.postcode}.</strong><span>The automated checker is being connected to our wholesale systems. We can discuss your requirements manually in the meantime.</span></div><Link className="result-link" href={`/contact?postcode=${encodeURIComponent(state.postcode)}`}>Request a manual check <Icon name="arrow" /></Link></div>}
    </div>
  </div></section>;
}
