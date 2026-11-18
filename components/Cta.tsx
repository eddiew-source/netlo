import Link from "next/link";
import { Icon } from "@/components/Icon";
export function Cta({ title = "Need a better connection?", subtitle = "Tell us what you need and we'll explain the options.", cta = "Talk to our team" }: { title?: string; subtitle?: string; cta?: string }) {
  return <section className="cta-section"><div className="container cta-layout"><div><div className="eyebrow">START A CONVERSATION</div><h2>{title}<br/><span>Let&apos;s talk.</span></h2><p>{subtitle}</p></div><Link href="/contact" className="btn btn-primary">{cta} <Icon name="arrow" /></Link></div></section>;
}
