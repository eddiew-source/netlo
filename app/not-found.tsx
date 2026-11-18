import Link from "next/link";
export default function NotFound(){ return <section className="error-page container"><span className="eyebrow">PAGE NOT FOUND</span><h1>That page isn&apos;t here.</h1><p>Try starting again from the Netlo homepage.</p><Link href="/" className="btn btn-primary">Back to Netlo</Link></section>; }
