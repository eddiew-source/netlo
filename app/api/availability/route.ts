import { NextResponse } from "next/server";
import { getConnectivityProvider } from "@/lib/connectivity/provider";
export const runtime = "nodejs";
export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }
  const id = typeof body === "object" && body !== null && "premisesId" in body ? (body as { premisesId: unknown }).premisesId : null;
  if (typeof id !== "string" || id.length === 0 || id.length > 120) return NextResponse.json({ error: "A valid premises identifier is required." }, { status: 400 });
  const provider = getConnectivityProvider();
  if (!provider) return NextResponse.json({ status: "coming_soon", message: "Live availability will be enabled following our wholesale integration." }, { status: 503 });
  try { const offers = await provider.checkAvailability(id); return NextResponse.json({ status: "ok", offers }); }
  catch { return NextResponse.json({ error: "Availability checking is temporarily unavailable." }, { status: 502 }); }
}
