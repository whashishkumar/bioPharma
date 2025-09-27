"use client";
import React, { useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { useContactUsPageContext } from "@/context/ContactUsPageContext";

const dummyLocations = [
  {
    id: 1,
    heading: "Registered Office",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086747876176!2d-122.41941508468141!3d37.77492927975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5c3b8f3f%3A0x1b8eaf0eeb9dfb!2sSan%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
    localAddress: "123 Main St, Floor 2",
    fullAddress: "San Francisco, CA 94103, USA",
  },
  {
    id: 2,
    heading: "Admin Office",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086747876176!2d-122.41941508468141!3d37.77492927975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5c3b8f3f%3A0x1b8eaf0eeb9dfb!2sSan%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
    localAddress: "456 Market St, Suite 10",
    fullAddress: "San Francisco, CA 94103, USA",
  },
];

export default function Location() {
  const [locationData, setLocationData] = useState<any[]>([]);
  const { loading, fetchContactUsSectionOne, sectionOne } =
    useContactUsPageContext();
  const { data }: any = sectionOne || {};

  console.log(data, "data");

  useEffect(() => {
    fetchContactUsSectionOne();
  }, []);

  return (
    <div className="bg-product-category">
      <section className="hero-child-container">
        <div className="grid  grid-col-1 lg:grid-cols-2 gap-8 lg:gap-25  py-18">
          {dummyLocations?.map((loc) => (
            <div key={loc.id} className="">
              <iframe
                src={loc.iframeSrc}
                title={loc.heading}
                width="100%"
                height="320"
                className=" object-cover rounded-lg "
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="py-6 flex flex-col justify-center gap-3 ">
                <h2 className="text-2xl  font-semibold text-[#172C45] sanchez">
                  {loc.heading}
                </h2>
                <p className="flex items-center gap-2 text-[#172C45] red-hat font-normal text-base md:text-lg leading-7 md:leading-8 uppercase">
                  <FaShoppingBasket />
                  {loc.localAddress}
                </p>
                <p className="flex items-center gap-2 text-[#172C45] red-hat font-normal text-base md:text-lg leading-7 md:leading-8 uppercase">
                  <IoLocationSharp />
                  {loc.fullAddress}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
