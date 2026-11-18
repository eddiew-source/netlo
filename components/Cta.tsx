import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { EnquiryService } from "@/lib/enquiry-services";
export function Cta({ title = "Need a better connection?", subtitle = "Tell us what you need and we'll explain the options.", cta = "Talk to our team", service }: { title?: string; subtitle?: string; cta?: string; service?: EnquiryService }) {
  return <section className="cta-section"><div className="container cta-layout"><div><div className="eyebrow">START A CONVERSATION</div><h2>{title}<br/><span>Let&apos;s talk.</span></h2><p>{subtitle}</p></div><Link href={service ? `/contact?service=${encodeURIComponent(service)}` : "/contact"} className="btn btn-primary">{cta} <Icon name="arrow" /></Link></div></section>;
}
