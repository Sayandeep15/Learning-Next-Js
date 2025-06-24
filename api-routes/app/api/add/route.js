import { NextResponse } from "next/server";

export async function POST(request) {
  let data = await request.json();
  console.log("Received data:", data);

  return NextResponse.json({ success: true, data: data });
}
