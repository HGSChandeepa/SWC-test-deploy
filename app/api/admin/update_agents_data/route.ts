import { NextResponse } from "next/server";
import { connectDB } from "@util/database";
import Agent from "@models/agent";

//here i want to update the agent role in to 'agent' and policy into 'policy'
export async function POST(request: Request) {
  try {
    await connectDB();
    const res = await request.json();
    const agent = await Agent.findOneAndUpdate(
      { email: res["email"] },
      {
        role: "agent",
        policy: "policy",
      }
    );
    if (!agent) {
      throw new Error("Failed to update user");
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
