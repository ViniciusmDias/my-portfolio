/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import StyledComponentsRegistry from './lib/registry'
import Header from "./components/header";
import { GlobalStyle } from "./global";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Frontend Developer",
  description: "I'm software developer and actually builds WebSites, E-Commerces and LandingPages.",
  openGraph: {
    title: "Frontend Developer",
    description: "I'm software developer and actually builds WebSites, E-Commerces and LandingPages.",
    images: "https://media.licdn.com/dms/image/D4D03AQFkBKY1cSYRBg/profile-displayphoto-shrink_200_200/0/1710872947712?e=1727913600&v=beta&t=Ea6dBZ3uoriShW3CpHFrgcsv-NegU5gxJLJJul-c3Uc"
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"/> 
      </Head>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <body>
          <Header />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
