"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const dummyFooterData = {
  logo: "/images/biofooterlogo.png",
  site_description:
    "BioBox Pharma for high-quality, affordable, and innovative pharmaceutical products manufactured in WHO-GMP-certified facilities. We offer monopoly-based PCD franchise opportunities.",

  quick_links: [
    {
      id: "home",
      title: "Home",
      url: "/",
    },
    {
      id: "about",
      title: "About Us",
      url: "/about-us",
    },
    {
      id: "patient",
      title: "Our Services",
      url: "/our-services",
    },
    {
      id: "OurProducts",
      title: "Our Products",
      url: "/our-products",
    },

    {
      id: "contact",
      title: "Contact Us",
      url: "/contact-us",
    },
  ],

  categories: [
    { id: 1, title: "Cardiology", slug: "cardiology" },
    { id: 2, title: "Neurology", slug: "neurology" },
    { id: 3, title: "Orthopedics", slug: "orthopedics" },
    { id: 4, title: "Pediatrics", slug: "pediatrics" },
    { id: 5, title: "Cardiology", slug: "cardiology" },
    { id: 6, title: "Neurology", slug: "neurology" },
    { id: 7, title: "Orthopedics", slug: "orthopedics" },
    { id: 8, title: "Pediatrics", slug: "pediatrics" },
    { id: 9, title: "Cardiology", slug: "cardiology" },
    { id: 10, title: "Neurology", slug: "neurology" },
    { id: 11, title: "Orthopedics", slug: "orthopedics" },
    { id: 12, title: "Pediatrics", slug: "pediatrics" },
    { id: 13, title: "Pediatrics", slug: "pediatrics" },
  ],
  company_iframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6864.1333451236505!2d76.822!3d30.660251000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9331aae7b425%3A0xea9f2c132206dc8c!2sBiophar%20Lifesciences%20Pvt.%20Ltd.%20-%20Leading%20Pharma%20Company%20In%20India!5e0!3m2!1sen!2sin!4v1758777594059!5m2!1sen!2sin",
  copyright: "Bioboxpharma. All rights reserved",
};

export default function Footer() {
  const {
    logo,
    site_description,
    quick_links,
    categories,
    company_iframe,
    copyright,
  } = dummyFooterData;
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="hero-sub-container">
      <div className="bg-[#172C45] rounded-2xl mb-4">
        <div className="sub-container">
          <footer className="text-white rounded-lg relative overflow-hidden grid md:grid-cols-[60%_40%] lg:grid-cols-[75%_25%] py-5 ">
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="flex flex-col gap-4">
                  {logo && (
                    <div className="flex ">
                      <Image
                        src={"/images/bioLogo.png"}
                        alt="Logo"
                        width={240}
                        height={83}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <p className="text-sm mt-2 marope font-normal leading-[27px] text-white">
                    {site_description}
                  </p>
                  <h4 className="font-bold text-lg primary-font font-semibold text-xl">
                    Subscribe to our newsletter
                  </h4>
                  <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md border-b border-b-[#FFFFFF1A] flex items-center pb-2"
                  >
                    <input
                      type="email"
                      placeholder="Enter Your E-mail Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full py-3 text-white placeholder-gray-300 bg-transparent focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#1CAD4D] cursor-pointer text-white p-3 flex items-center justify-center rounded-lg"
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </form>
                </div>

                <div className="flex flex-col gap-4 lg:items-center">
                  <h4 className="font-bold text-lg primary-font font-semibold text-xl">
                    Quick Links
                  </h4>
                  <ol className="flex flex-col gap-2  list-disc pl-5">
                    {quick_links.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.url}
                          className="hover:text-[#01A859] transition-colors text-base marope font-medium"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-lg primary-font font-semibold text-xl">
                    Categories
                  </h4>
                  <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={`/our-products/${cat.slug}`}
                          className="hover:text-[#01A859] transition-colors marope font-medium text-base"
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="text-center text-sm mt-10 border-t border-white/20 pt-10 marope font-light text-base">
                ©{new Date().getFullYear()} {copyright}
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden flex  md:items-center ">
              <iframe
                src={company_iframe}
                width="600"
                height="522"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
