import { NextRequest, NextResponse } from "next/server";
import cryptoRandomString from "crypto-random-string";
import Cryptr from "cryptr";
import { render } from "@react-email/render";
import ForgotPasswordEmail from "../../ForgotPasswordEmail/page";
import { sendEmail } from "@/config/mail";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";

connectMongoDB();

export async function POST(request) {
  const payload = await request.json();
  
  // * Check user email firsr
  const user = await User.findOne({ email: payload.email });
  
  console.log("User = ",user);
  
  if (user == null) {
    console.log("400");
    return NextResponse.json({status: 400});
  }

  //   * Generate random string
  const randomStr = cryptoRandomString({
    length: 64,
    type: "alphanumeric",
  });

  user.password_reset_token = randomStr;
  await user.save();

  // * Encrypt user email
  const crypt = new Cryptr(process.env.NEXTAUTH_SECRET);
  const encryptedEmail = crypt.encrypt(user.email);

  const url = `${process.env.APP_URL}/ResetPasswordModule/${encryptedEmail}?signature=${randomStr}`;

  try {
    const html = render(
      ForgotPasswordEmail({
        params: {
          name: user.name,
          url: url,
        },
      })
    );

    // * Send email to user
    await sendEmail(payload.email, "Reset Password", html);
    return NextResponse.json({
      status: 200,
      message: "Email sent successfully.please check your email.",
    });
  } catch (error) {
    console.log("the error is", error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong.please try again!",
    });
  }
}
