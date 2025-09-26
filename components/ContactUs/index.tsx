"use client";
import PageTitle from "@/ui/PageTitle";
import React, { useEffect } from "react";
import ReachUs from "./ReactUs";
import ContactUsForm from "./ContactUsForm";
import { useContactUsPageContext } from "@/context/ContactUsPageContext";

export default function ContactUs() {
  const { sectionTwoData, fetchContactUsSectionTwo, loading } =
    useContactUsPageContext();
  const { data, menu }: any = sectionTwoData || {};
  const {} = data || {};
  console.log(sectionTwoData, "sectionTwoData");

  useEffect(() => {
    fetchContactUsSectionTwo();
  }, []);
  return (
    <>
      <div>
        <div className="hero-child-container">
          <div className="py-14">
            <PageTitle
              tag={data?.title}
              tagClass="border border-[#00A859] rounded-full px-4 py-1 text-sm sm:text-base capitalize text-[#172C45] leading-4 sm:leading-5 w-max"
              heading={data?.heading}
              subHeading={data?.sub_heading}
              headingClass="text-2xl sm:text-3xl md:text-[2.875rem] mt-2 font-normal text-[#172C45] leading-snug sm:leading-normal md:leading-[3.438rem] mt-6 max-w-full sm:max-w-xl md:max-w-2xl text-center"
              wrapperClass="w-full mx-auto px-4"
              subHeadingClass=" mt-6 text-center"
              tagWrapper="flex flex-col items-center"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 mt-12">
              <ReachUs data={data} menu={menu} />
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
