import React from "react";
import Header from "../Header";
import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import Button from "@/ui/Button";

export const navBarLinks = [
  {
    id: "home",
    title: "Home",
    url: "/",
  },
  {
    id: "about",
    title: "About Us",
    url: "/about",
  },
  {
    id: "OurProducts",
    title: "Our Services",
    url: "/our-products",
  },
  {
    id: "patient",
    title: "Our Services",
    url: "/our-services",
  },
  {
    id: "contact",
    title: "Contact Us",
    url: "/contact",
  },
];

const avatars = [
  { id: 1, src: "/icons/Figure.png", alt: "Avatar 1" },
  { id: 2, src: "/icons/Figure.png", alt: "Avatar 2" },
  { id: 3, src: "/icons/Figure.png", alt: "Avatar 3" },
];

export default function HeroBanner() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1] "
        style={{
          backgroundImage: "url('/images/header-image.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/20  z-[-1]" />
      <div className="hero-sub-container">
        <Header navBarLinks={navBarLinks} />
        <div className="text-white  sub-container">
          <div className="lg:mt-25 grid grid-cols  md:grid-cols-2 lg:grid-cols-2 lg:gap-20 lg:gap-45 gap-10 py-12">
            <div className="mb-30">
              <PageTitle
                tag="Your partner in Health"
                tagClass="text-white border  rounded-full w-[180px] p-2 text-sm capitalize "
                heading="Cottiment to quality healthcare, its diverse product range"
                headingClass="text-[2.875rem] mt-2 font-normal  text-[#fff] leading-[3.438rem]"
                subHeading="Delivering Care with Eye Dose."
                subHeadingClass="text-xl font-normal mt-2 text-white tracking-wide"
              />
              <div className="lg:flex gap-8">
                <Button children={"Contact Us"} />
                <Button children={"Explore Our Services"} variant="secondary" />
              </div>
              <div className="flex flex-col sm:flex-col md:flex-row items-center  gap-8 mt-10 text-center md:text-left">
                <div className="primary-font font-bold text-3xl flex flex-col md:flex-row items-center gap-2">
                  <h4>25+</h4>
                  <p className="primary-font font-normal text-sm max-w-[120px]">
                    Years Of Experience
                  </p>
                </div>
                <div className="flex -space-x-2">
                  {avatars.map((avatar) => (
                    <img
                      key={avatar.id}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-contain"
                      src={avatar.src}
                      alt={avatar.alt}
                    />
                  ))}
                </div>
                <div className="primary-font text-sm flex flex-col items-center md:items-start">
                  <p>Trusted By</p>
                  <p className="primary-font font-bold text-sm">
                    5K Satisfied Clients
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center  md:jusstify-center lg:justify-end lg:items-start lg:pr-40 lg:mt-20">
              <Image
                src={"/images/Link.png"}
                height={120}
                width={120}
                alt={"play-cion"}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
