"use client";
import { useState, type FormEvent } from "react";
import { Icon } from "@/components/Icon";

type Status = { kind: "idle" | "busy" } | { kind: "success" | "error"; message: string };
export function ContactForm({ postcode }: { postcode?: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [message, setMessage] = useState(postcode ? `Please advise on broadband availability for ${postcode}.\n\n` : "");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "busy" });
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const json: { error?: string } = await response.json();
      if (!response.ok) { setStatus({ kind: "error", message: json.error || "Your message wasn't sent. Please try again." }); return; }
      form.reset(); setMessage(""); setStatus({ kind: "success", message: "Thanks, your enquiry has been sent. We'll be in touch." });
    } catch { setStatus({ kind: "error", message: "Couldn't reach the enquiry service. Please try again later." }); }
  }
  return <form onSubmit={submit} className="contact-form" aria-label="Enquiry form">
    <div className="form-row"><div className="field"><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" required maxLength={120} autoComplete="name" placeholder="Your full name" /></div><div className="field"><label htmlFor="email">Work email <span>*</span></label><input id="email" type="email" name="email" autoComplete="email" required maxLength={255} placeholder="you@company.co.uk" /></div></div>
    <div className="form-row"><div className="field"><label htmlFor="company">Company</label><input id="company" name="company" maxLength={160} autoComplete="organization" placeholder="Company name" /></div><div className="field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={50} placeholder="Optional" /></div></div>
    <div className="field"><label htmlFor="service">What can we help with?</label><select id="service" name="service" defaultValue={postcode ? "Broadband availability" : "Business broadband"}><option>Business broadband</option><option>Broadband availability</option><option>Leased lines</option><option>Resilient networks & failover</option><option>Managed IT</option><option>Cybersecurity</option><option>Something else</option></select></div>
    <div className="field"><label htmlFor="message">Tell us a little more <span>*</span></label><textarea id="message" name="message" rows={6} maxLength={4000} required placeholder="What do you need help with?" value={message} onChange={e => setMessage(e.target.value)} /></div>
    <div className="sr-only" aria-hidden="true"><label htmlFor="website">Leave this empty</label><input name="website" id="website" tabIndex={-1} autoComplete="off" /></div>
    <div className="form-bottom"><button className="btn btn-primary" disabled={status.kind === "busy"} type="submit">{status.kind === "busy" ? "Sending…" : "Send enquiry"} <Icon name="arrow" /></button><p>We&apos;ll only use these details to respond to your enquiry. See our privacy notice.</p></div>
    {status.kind === "error" && <div className="form-feedback error" role="alert">{status.message}</div>}
    {status.kind === "success" && <div className="form-feedback success" role="status">{status.message}</div>}
  </form>;
}
