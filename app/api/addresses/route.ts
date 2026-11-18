import { NextResponse } from "next/server";
import { getConnectivityProvider } from "@/lib/connectivity/provider";
import { normaliseUKPostcode } from "@/lib/connectivity/postcode";
export const runtime = "nodejs";
export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }
  const raw = typeof body === "object" && body !== null && "postcode" in body ? (body as { postcode: unknown }).postcode : null;
  const postcode = typeof raw === "string" ? normaliseUKPostcode(raw) : null;
  if (!postcode) return NextResponse.json({ error: "Enter a valid UK postcode." }, { status: 400 });
  const provider = getConnectivityProvider();
  if (!provider) return NextResponse.json({ status: "coming_soon", postcode, message: "Live address lookup will be enabled following our wholesale integration." }, { status: 503 });
  try { const addresses = await provider.lookupAddresses(postcode); return NextResponse.json({ status: "ok", postcode, addresses }); }
  catch { return NextResponse.json({ error: "Address lookup is temporarily unavailable." }, { status: 502 }); }
}
