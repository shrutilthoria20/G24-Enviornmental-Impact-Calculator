import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description}=await request.json();
    await connectMongoDB();
    await Topic.create({title,description});
    return NextResponse.json({message:"Topic Created"},{status:201});
}

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        if (!id) {
            throw new Error("Missing ID parameter");
        }

        await connectMongoDB();
        await Topic.findByIdAndDelete(id);

        return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting topic:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}