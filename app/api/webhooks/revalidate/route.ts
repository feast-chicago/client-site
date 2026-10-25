import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("REVALIDATE WEBHOOK HIT");
  const secret = req.headers.get("x-webhook-secret");

  if (secret !== process.env.SUPABASE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await revalidateTag("business", "max");
  return NextResponse.json({ revalidated: true });
}
