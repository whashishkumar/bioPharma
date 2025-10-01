"use client";

import { useEffect, useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLandingPageContext } from "@/context/LandingPageContext";

const navBarLinksList = [
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
];

interface MenuItem {
  id: string;
  title: string;
  url: string;
  submenu?: MenuItem[];
  innerHeader?: boolean;
}

interface Contact {
  phone?: string;
}

interface HeaderProps {
  logo?: string;
  navBarLinks?: MenuItem[];
  contact?: Contact;
  innerHeader?: boolean;
}

export default function Header({
  // logo = "/images/bioLogo.png",
  navBarLinks = navBarLinksList,
  // contact,
  innerHeader = false,
}: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { navigationList, fetchNaviagtionList } = useLandingPageContext();
  const { menus, logo, phone }: any = navigationList || [];

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
      <div className=" flex items-center justify-between  py-4 ">
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

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-10 items-center">
          {menus?.map((link: any) => {
            const isActive = pathname === link.url;
            const hasDropdown = link.submenu && link.submenu.length > 0;

            return (
              <li
                key={link.id}
                className="relative group primary-font text-base "
                onMouseEnter={() =>
                  hasDropdown && setActiveDropdown(link.title)
                }
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={`/${link.url.replace(/^\/?/, "")}`} // ensure starts with /
                  className={`${
                    isActive ? "text-[#01A859]" : inactiveColor
                  } hover:text-[#01A859]`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}

          <li>
            <Link href={`tel:${phone}`}>
              <div className="flex items-center gap-2 bg-[#01A859] text-white px-6 py-2 rounded-full primary-font  text-base">
                <FaPhoneAlt /> <span>{phone}</span>
              </div>
            </Link>
          </li>
          {/* )} */}
        </ul>

        {/* Hamburger */}
        <div
          className="lg:hidden text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/1 w-full  p-6 flex flex-col gap-4">
          {menus?.map((link: any) => {
            const isActive = pathname === link.url;
            const hasDropdown = link.submenu && link.submenu.length > 0;
            const isDropdownOpen = activeDropdown === link.title;

            return (
              <div
                key={link.id}
                className="flex flex-col text-base primary-font"
              >
                <button
                  className={`text-white font-medium text-left ${
                    isActive ? "text-[#01A859]" : ""
                  }`}
                  onClick={() =>
                    hasDropdown
                      ? setActiveDropdown(isDropdownOpen ? null : link.title)
                      : handleLinkClick(link.url)
                  }
                >
                  {link.title}
                </button>
              </div>
            );
          })}

          {/* Mobile Call */}
          {/* {contact?.phone && ( */}
          <Link href={`tel:${1234567890}`}>
            <div className="flex items-center gap-2 bg-[#01A859] text-white px-6 py-2 rounded-full font-semibold mt-4 primary-font">
              <FaPhoneAlt /> <span>{1234567890}</span>
            </div>
          </Link>
          {/* )} */}
        </div>
      )}
    </nav>
  );
}
