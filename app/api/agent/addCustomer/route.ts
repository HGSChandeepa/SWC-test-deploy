import { NextResponse } from "next/server";
import { connectDB } from "@util/database";
import Customer from "@models/customer";

export async function POST(request: Request) {
  try {
    await connectDB();
    const res = await request.json();
    const customer = await Customer.create({
      name: res["CustomerName"],
      email: res["CustomerEmail"],
      phone: res["CustomerContactNumber"],
      address: res["CustomerAddress"],
      orderNumber: res["CustomerOrderNumber"],
    });
    if (!customer) {
      throw new Error("Failed to create customer");
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
