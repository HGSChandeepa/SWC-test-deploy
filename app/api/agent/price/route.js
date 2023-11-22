import rollerBlindPrices from "./data";
import { NextResponse } from "next/server";

// post request to calculate price
export async function POST(request) {
  const requestBody = await request.json(); // Parse the JSON body

  const { category, width, height } = requestBody;
  let price = 0;

  try {
    // check if the selected category exists
    if (category in rollerBlindPrices) {
      // check if the width and height are available for the selected category
      if (
        width in rollerBlindPrices[category] &&
        height in rollerBlindPrices[category][width]
      ) {
        price = rollerBlindPrices[category][width][height];
      } else {
        throw new Error("Invalid width or height for the selected category.");
      }
    } else {
      const availableCategories = Object.keys(rollerBlindPrices).join(", ");
      throw new Error(
        `Invalid category. Available categories: ${availableCategories}`
      );
    }

    console.log("price", price);
    return NextResponse.json({ price }, { status: 200 });
  } catch (error) {
    console.error("error", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
