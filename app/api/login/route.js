import { NextResponse } from "next/server";

export function login() {
  try {
    return new NextResponse(JSON.stringify({ error: "Succès" }));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  }
}
