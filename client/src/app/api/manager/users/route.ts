import { NextResponse } from "next/server";
import randomUsers from "@/components/jsons/randomsUsers.json";

export async function GET() {
  try {
    return NextResponse.json(randomUsers);
  } catch (error) {
    console.log(error);
  }
}
