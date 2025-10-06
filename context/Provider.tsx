"use client";
import React, { ReactNode } from "react";
import { LandingPageProvider } from "./LandingPageContext";
import { AboutUsPageProvider } from "./AboutUsPageContext";
import { OurServicesProvider } from "./OurServicesPageContext";
import { ContactUsPageProvider } from "./ContactUsPageContext";
import { AllProductsPageProvider } from "./AllProductsContext";
import { BlogsProvider } from "./OurBlogsContext";

const providers = [
  LandingPageProvider,
  AboutUsPageProvider,
  OurServicesProvider,
  ContactUsPageProvider,
  AllProductsPageProvider,
  BlogsProvider,
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
