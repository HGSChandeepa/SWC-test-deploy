import { NextResponse } from "next/server";
import { connectDB } from "@util/database";
import Agent from "@models/agent";

export async function GET() {
  try {
    await connectDB();
    const agents = await Agent.find({});
    if (!agents) {
      throw new Error("Failed to get agents");
    }
    return NextResponse.json({ error: false, agents: agents });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true });
  }
}
