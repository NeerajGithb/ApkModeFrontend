import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  const { password } = await req.json();
  const correctPassword = process.env.NEXT_PUBLIC_SECRET_PASSWORD;

  if (password === correctPassword) {
     const cookieStore = cookies();
     cookieStore.set("resumeAccess", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: undefined,
      expires: undefined,
      path: "/",
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ message: "Invalid password" }, { status: 401 });
}
