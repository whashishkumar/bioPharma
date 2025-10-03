"use client";

import { useEffect, useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLandingPageContext } from "@/context/LandingPageContext";

export default function Header({
  innerHeader = false,
}: {
  innerHeader?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { navigationList, fetchNaviagtionList } = useLandingPageContext();
  const { menus, logo, phone }: any = navigationList || {};

  useEffect(() => {
    fetchNaviagtionList();
  }, []);

  const handleLinkClick = (url: string) => {
    setMenuOpen(false);
    router.push(`${`/${url.replace(/^\/?/, "")}`}`);
  };

  const inactiveColor = innerHeader ? "text-gray-600" : "text-white";

  return (
    <nav className="sub-container">
      <div className="flex items-center justify-between py-4">
        <Link href="/">
          {logo && (
            <Image
              src={logo}
              alt="Logo"
              width={193}
              height={83}
              className="object-contain"
            />
          )}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 items-center">
          {menus?.map((link: any) => {
            const isActive = pathname === link.url;
            return (
              <li
                key={link.id}
                className="relative group primary-font text-base"
              >
                <Link
                  href={`/${link.url.replace(/^\/?/, "")}`}
                  className={`${
                    isActive ? "text-[#01A859]" : inactiveColor
                  } hover:text-[#01A859]`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
          {phone && (
            <li>
              <Link href={`tel:${phone}`}>
                <div className="flex items-center gap-2 bg-[#01A859] text-white px-6 py-2 rounded-full primary-font text-base">
                  <FaPhoneAlt /> <span>{phone}</span>
                </div>
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile menu toggle */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-100 bg-black text-white flex flex-col">
          {/* Header inside menu */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              {logo && (
                <Image
                  src={logo}
                  alt="Logo"
                  width={150}
                  height={60}
                  className="object-contain"
                />
              )}
            </Link>
            <button className="text-2xl" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto">
            {menus?.map((link: any) => {
              const isActive = pathname === link.url;
              return (
                <button
                  key={link.id}
                  className={`text-left text-lg font-medium ${
                    isActive ? "text-[#01A859]" : "text-white"
                  }`}
                  onClick={() => handleLinkClick(link.url)}
                >
                  {link.title}
                </button>
              );
            })}

            {phone && (
              <Link href={`tel:${phone}`} onClick={() => setMenuOpen(false)}>
                <div className="flex items-center gap-2 bg-[#01A859] text-white px-6 py-3 rounded-full font-semibold mt-6">
                  <FaPhoneAlt /> <span>{phone}</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
