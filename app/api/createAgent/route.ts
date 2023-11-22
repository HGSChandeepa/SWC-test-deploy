import { NextResponse } from "next/server";
import { connectDB } from "@util/database";
import Agent from "@models/agent";

export async function POST(request: Request) {
  try {
    await connectDB();
    const res = await request.json();
    const agent = await Agent.create({
      email: res["email"],
      first_name: res["fname"],
      last_name: res["lname"],
      password: res["password"],
      // date: res["date"],
      image: "",
      role: "",
      policy: "",
      auth: "Credential",
    });
    if (!agent) {
      throw new Error("Failed to create user");
    }
    return NextResponse.json({ error: false });
  } catch (error) {
    console.log(error);
    const obj = { error: true };
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });

    return new Response(blob, {
      status: 403,
    });
  }
}
