import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
// import Head from "next/head";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Intelli Mock",
  description: "An interview session hosting by AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic={true}>
      {/* <Head>
        <link rel="icon" href="./app/favicon.ico" />
      </Head> */}
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster/> {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
