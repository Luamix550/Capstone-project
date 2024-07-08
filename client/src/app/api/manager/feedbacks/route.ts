// import axios from "../axios";
import jsonRandoms from "@/components/jsons/randomsFeedbacks.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
     return NextResponse.json(jsonRandoms);
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    console.log(error);
  }
}
