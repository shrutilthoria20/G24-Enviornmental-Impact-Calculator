
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
//import SignUp from "/LoginModule/RegisterForm";

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return <SignUp />;
}
