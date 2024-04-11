import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/user";


export async function POST(request){
    try{
        const{name,email,password}= await request.json();
        const hashedPassword=await bcrypt.hash(password,10);
        // const token="false";
        await connectMongoDB();
        await User.create({name,email,password:hashedPassword});
        // console.log("Name:",name);
        // console.log("Email:",email);
        // console.log("Password:",password);
        // console.log("token:",token);
        return NextResponse.json({message:"User Registered"},{status:201});
    }catch(error){
        return NextResponse.json({message:"Error Occured"},{status:500});
    }
}
