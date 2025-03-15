import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import { Institution } from "@/models";

// GET - Fetch all institutions
export async function GET() {
  try {
    await connectToDB();
    const institutions = await Institution.find().populate("admins");
    return NextResponse.json(institutions);
  } catch (error) {
    return NextResponse.json("Error");
  }
}
