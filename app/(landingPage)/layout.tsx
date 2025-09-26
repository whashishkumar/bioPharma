import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import React from "react";

import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeroBanner />
      {children}
      <Footer />
    </div>
  );
}
