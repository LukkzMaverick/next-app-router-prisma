import { fetchRestaurantsAndReviewCount } from "@/services/restaurant.service";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetchRestaurantsAndReviewCount();
  return NextResponse.json(data, { status: 200 });
}
