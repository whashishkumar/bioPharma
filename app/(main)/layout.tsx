import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-xs">
        <Header innerHeader={true} />
      </div>
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
