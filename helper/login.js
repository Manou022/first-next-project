import { NextResponse } from "next/server";

export const login = async () => {
  try {
    const res = await fetch(`locahlost:3000/api/login`);
    return new NextResponse(JSON.stringify(res));
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err.message }));
  }
};
