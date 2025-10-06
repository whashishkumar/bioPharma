"use client";

import Image from "next/image";
import { GoDash } from "react-icons/go";
import OurServicesForm from "./OurServicesForm";
import { useOurServicesPageContext } from "@/context/OurServicesPageContext";
import { useEffect } from "react";

const servicesData = [
  {
    id: 1,
    imageUrl: "/images/arti1.jpg",
    franchise_heading: "Become PCD Pharma Franchise Owner Today",
    franchise_sub_heading: "Fill This Form for More Info",
    description:
      "We are a Chandigarh-based pharma manufacturing company offering high-quality pharmaceutical products. We provide PCD Pharma Franchise with monopoly rights across India. Partner with us for a profitable and growth-oriented business opportunity!",
  },
  {
    id: 2,
    imageUrl: "/images/arti1.jpg",
    enquiry_heading: "Enquiry Now",
    enquiry_description:
      "Fill out this form, and our executive will get in touch with you soon. We’re here to assist you with all your queries and business needs!",
    hasForm: true,
  },
];

export default function OurServices() {
  const { ourServicesData, fetchOurServiceHeroPageData, loading } =
    useOurServicesPageContext();

  const { data }: any = ourServicesData || {};
  const {
    franchise_image,
    franchise_heading,
    franchise_sub_heading,
    description,
    enquiry_image,
    enquiry_heading,
    enquiry_sub_heading,
    enquiry_description,
  } = data || {};

  useEffect(() => {
    fetchOurServiceHeroPageData();
  }, []);

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${franchise_image}`;
  const imageUrl2 = `${baseUrl}${imagePath}/${enquiry_image}`;

  return (
    <div className="hero-child-container">
      <section className="grid grid-col-1 lg:grid-cols-2 gap-20 py-20">
        <div className="">
          {franchise_image && (
            <Image
              src={franchise_image}
              alt="Service"
              width={400}
              height={550}
              className="w-full lg:max-w-[550px] h-auto object-contain"
            />
          )}
          <div className="flex flex-col gap-4 py-6 text-left mt-10">
            <h2 className="text-lg md:text-2xl font-semibold text-[#172C45] sanchez uppercase">
              {franchise_heading}
            </h2>
            <h1 className="text-lg md:text-2xl font-semibold text-[#172C45] sanchez uppercase">
              {franchise_sub_heading}
            </h1>
            <p className="text-[#45566A] red-hat font-normal text-base md:text-lg leading-7 md:leading-8">
              {description}
            </p>
          </div>
        </div>
        <div>
          {enquiry_image && (
            <Image
              src={enquiry_image}
              alt={"Service"}
              width={400}
              height={550}
              className="w-full lg:max-w-[550px] h-auto object-contain"
            />
          )}
          {ourServicesData && (
            <div className="flex flex-col gap-4 py-6 mt-10">
              <h1 className="flex items-center justify-center gap-3 text-2xl font-semibold uppercase tracking-wider text-gray-900">
                <GoDash className="text-lg md:text-xl font-semibold text-[#172C45] sanchez" />
                {enquiry_heading}
                <GoDash className="text-lg md:text-xl font-semibold text-[#172C45] sanchez text-center" />
              </h1>
              <p className="text-[#45566A] red-hat font-normal text-base md:text-lg leading-7 md:leading-8 text-center">
                {enquiry_description}
              </p>
              <OurServicesForm />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
