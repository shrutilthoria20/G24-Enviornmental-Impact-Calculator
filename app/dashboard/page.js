"use client";
import UserInfo from "../UserInfoModule/page"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Banner from "../../components/Banner";

export default async function Dashboard(){
    const session = await getServerSession();
  if (!session) {
    redirect("/LoginModule");
  }
    return <Banner />
}