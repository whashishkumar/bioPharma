"use client";
import { useLandingPageContext } from "@/context/LandingPageContext";
import Accordion from "@/ui/Accordian";
import Button from "@/ui/Button";
import PageTitle from "@/ui/PageTitle";
import React, { useEffect } from "react";

const faqData = [
  {
    id: 1,
    title: "Q1. What types of research services do you offer?",
    content:
      "PCD Pharma Business allows you to start your own pharma company with products and marketing support.",
  },
  {
    id: 2,
    title: "Q2. Can I request a custom research project?",
    content:
      "You can apply online or contact our support team to become a franchise partner in your city.",
  },
  {
    id: 3,
    title: "Q3. How long does a typical research project take?",
    content:
      "Access to quality products, marketing support, and flexible business opportunities.",
  },
  {
    id: 4,
    title: "Q4. Are your labs certified or accredited?",
    content:
      "You can apply online or contact our support team to become a franchise partner in your city.",
  },
  {
    id: 5,
    title: "Q5. How do I submit a sample or start a project?",
    content:
      "Access to quality products, marketing support, and flexible business opportunities.",
  },
];

export default function FaqSection() {
  const { faq, fetchFaq } = useLandingPageContext();
  const {
    section_heading,
    section_name,
    section_sub_heading,
    data,
    button,
  }: any = faq;

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <>
      <div className="hero-sub-container">
        <div className="bg-white">
          <div className="hero-child-container">
            <div className="py-16 grid grid-col-1 lg:grid-cols-2 gap-20">
              <div>
                <PageTitle
                  tag={section_name}
                  tagClass="border border-[#172C451A] rounded-full max-w-[240px]  p-2 text-sm capitalize text-[#172C45] leading-[16px]"
                  heading={section_heading}
                  headingClass="text-[2.875rem] mt-2 font-normal text-[#172C45] leading-[3.438rem] mt-6"
                  subHeading={section_sub_heading}
                  subHeadingClass="text-base font-normal mt-2 text-[#45566A] leading-[25px] mt-2"
                />
                {/* <div className="mt-8">
                  <Button children={button?.[0].name} />
                </div> */}
              </div>
              <div className="bg-product-category rounded-[20px] p-6">
                <Accordion data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
