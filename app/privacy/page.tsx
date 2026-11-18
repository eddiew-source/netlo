import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy", description: "How Netlo handles information you share with us." };
export default function Privacy() { return <section className="section legal-page"><div className="container narrow">
  <span className="eyebrow eyebrow-blue">YOUR PRIVACY</span><h1>Privacy <em>matters.</em></h1>
  <p>We aim to keep the information we collect limited to what we need to answer enquiries, provide connectivity services and support customers.</p>
  <h2>Contact and enquiries</h2><p>When you contact us, we ask for your name, email address and message. You can also choose to share company details and a telephone number. We use those details to respond to your enquiry.</p>
  <h2>Broadband availability</h2><p>When you submit a postcode or address for an availability check, we use it to identify the broadband options for that location. Where needed, these details may be shared securely with connectivity suppliers to carry out the check.</p>
  <h2>Customer accounts</h2><p>Account sign-in is handled by a specialist authentication provider. We keep customer information limited to what's needed to operate and support the services you're authorised to use.</p>
  <h2>Questions about your information</h2><p>You can contact us with questions about the information you've provided.</p><p><Link href="/contact" className="text-arrow">Contact Netlo →</Link></p>
</div></section>; }
