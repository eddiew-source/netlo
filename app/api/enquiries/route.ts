import { readJsonInput, HttpInputError } from "@/lib/http-input";
import { NextResponse } from "next/server";
import { isEnquiryService } from "@/lib/enquiry-services";
export const runtime = "nodejs";

type Enquiry = { name: string; email: string; company: string; phone: string; service: string; message: string; website?: string };
const isText = (x: unknown, max: number) => typeof x === "string" && x.trim().length <= max;
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] || c));

export async function POST(request: Request) {
  let raw: unknown;
  try { raw = await readJsonInput(request, 10_000); } catch (error) { return NextResponse.json({ error: error instanceof HttpInputError ? error.message : "Invalid request." }, { status: error instanceof HttpInputError ? error.status : 400 }); }
  if (!raw || typeof raw !== "object") return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const data = raw as Record<string, unknown>;
  for (const [field, max] of Object.entries({ name: 120, email: 255, company: 160, phone: 50, service: 80, message: 4000, website: 150 })) {
    if (!isText(data[field] ?? "", max)) return NextResponse.json({ error: `Invalid ${field}.` }, { status: 400 });
  }
  const enquiry: Enquiry = {
    name: String(data.name || "").trim(), email: String(data.email || "").trim(),
    company: String(data.company || "").trim(), phone: String(data.phone || "").trim(),
    service: String(data.service || "General enquiry").trim(), message: String(data.message || "").trim(),
    website: String(data.website || "").trim(),
  };
  if (enquiry.website) return NextResponse.json({ status: "ok" }); // honeypot
  if (!enquiry.name || !enquiry.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return NextResponse.json({ error: "Name, valid email and message are required." }, { status: 400 });
  }
  if (!isEnquiryService(enquiry.service)) return NextResponse.json({ error: "Choose a valid enquiry type." }, { status: 400 });
  // Never expose an operational outbound mail endpoint merely by adding API keys.
  // Enable only after production abuse controls / rate limiting are verified.
  if (process.env.NETLO_PUBLIC_ENQUIRIES_ENABLED !== 'true') {
    return NextResponse.json({ error: "Online enquiries aren't available right now. Please try again later." }, { status: 503 });
  }
  const key = process.env.RESEND_API_KEY, from = process.env.ENQUIRY_FROM_EMAIL, to = process.env.ENQUIRY_TO_EMAIL;
  if (!key || !from || !to) return NextResponse.json({ error: "Online enquiries aren't enabled yet. Please try again later." }, { status: 503 });
  const fields = [
    ["Name", enquiry.name], ["Email", enquiry.email], ["Company", enquiry.company || "Not supplied"],
    ["Phone", enquiry.phone || "Not supplied"], ["Service", enquiry.service], ["Message", enquiry.message],
  ];
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: enquiry.email,
        subject: `Netlo enquiry: ${enquiry.service}`,
        html: `<h2>New Netlo enquiry</h2>${fields.map(([k,v]) => `<p><strong>${escapeHtml(k)}:</strong><br>${escapeHtml(v).replace(/\n/g, "<br>")}</p>`).join("")}` }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) return NextResponse.json({ error: "We couldn't send your enquiry. Please try again shortly." }, { status: 502 });
    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch { return NextResponse.json({ error: "The enquiry service is temporarily unavailable." }, { status: 502 }); }
}
