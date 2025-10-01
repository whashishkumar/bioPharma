"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLandingPageContext } from "@/context/LandingPageContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { footerData, fetchFooterList } = useLandingPageContext();
  const { data, menu }: any = footerData;
  const { logo, site_description, address, copyright, company_iframe }: any =
    data || {};
  const { social_icons, categories, quick_links }: any = menu || {};
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchFooterList();
  }, []);

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
                    {quick_links?.map((link: any) => (
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
                    {categories?.slice(0, 13)?.map((cat: any) => (
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
