"use client";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { AuthProvider } from "./Providers";
import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
// export const metadata = {
//   title: "CodeHabit",
//   description:
//     "We Provide Services like Game Development, App Development, Web Development etc..",
// };
const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children,showHeader = true,showFooter = true }) {
  export default function RootLayout({ children,showHeader = true,showFooter = true }) {
  const router = usePathname();
  // const pathsWithHeader = ["/ResetPasswordModule", "/LoginModule", "/RegisterModule"];
  if (router == "/LoginModule" || router == "/ForgotPassModule" || router == "/RegisterModule" || router.startsWith("/ResetPasswordModule") || router == "/ShowResultModule" || router =="/Download-pdf" || router == "/ChatBot" || router == "/test") 
  {
    return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        {/* {showHeader && < Header />} */}
        {/* < Header /> */}
        
        {children}

        {/* {showFooter && <Footer />} */}
        {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
 }
  else{ 
    return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        {/* {showHeader && < Header />} */}
        < Header />
        
        {children}

        {/* {showFooter && <Footer />} */}
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );}
  
}
