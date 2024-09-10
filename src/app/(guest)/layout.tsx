import { Footer, Header } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hybrbase Ecommerce",
  description:
    "Explore the latest collection of shoes at Hybrbase, your go-to destination for trendy, comfortable, and durable footwear. From athletic shoes to casual sneakers, formal shoes, and stylish boots, we offer a wide range of men’s, women’s, and kids' shoes to suit every occasion. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
