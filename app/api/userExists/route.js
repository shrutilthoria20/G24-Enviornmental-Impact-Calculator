import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectMongoDB();
    const { email } = await request.json();
    console.log("Email: ", email);
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    // return error;
    // return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
  }
}