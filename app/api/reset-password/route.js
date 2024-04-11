import { NextRequest, NextResponse } from "next/server";
import Cryptr from "cryptr";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

connectMongoDB();

export async function POST(request) {
  const payload = await request.json();
  if (payload.password == payload.password_confirmation){
    const crypter = new Cryptr(process.env.NEXTAUTH_SECRET);
  const email = crypter.decrypt(payload.email);
//   const email = payload.email;
//   console.log("Email = ",email);
  const user = await User.findOne({
    email: email,
    password_reset_token: payload.signature,
  });
//   console.log("User = ",user);

  if (user == null || user == undefined) {
    return NextResponse.json({
      status: 400,
      message: "Reset url is not correct. pls double check it .",
    });
  }

  const hashedPassword=await bcrypt.hash(payload.password,10);
  user.password = hashedPassword;
  user.password_reset_token = null;
  await user.save();

  return NextResponse.json({
    status: 200,
    message: "Password changed successfully. please login with new password.",
  });
  }
  else{
    return NextResponse.json({
      status: 500,
      message: "Password donesn't matches.",
    });
  }
  
}
