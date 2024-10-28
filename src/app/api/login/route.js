import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();
  if (username === "testuser" && password === "password123") {
    const token = "TestToken";

    const response = NextResponse.json({ message: "Login successful!" });
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    return response;
  } else {
    return NextResponse.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );
  }
}
