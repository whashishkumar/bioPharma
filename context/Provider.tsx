"use client";
import React, { ReactNode } from "react";
import { LandingPageProvider } from "./LandingPageContext";
import { AboutUsPageProvider } from "./AboutUsPageContext";
import { OurServicesProvider } from "./OurServicesPageContext";
import { ContactUsPageProvider } from "./ContactUsPageContext";
import { AllProductsPageProvider } from "./AllProductsContext";
import { AuthProvider } from "./AuthContext";

const providers = [
  LandingPageProvider,
  AboutUsPageProvider,
  OurServicesProvider,
  ContactUsPageProvider,
  AllProductsPageProvider,
  // AuthProvider,
];

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return providers.reduce<ReactNode>(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
}
