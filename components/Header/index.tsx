"use client";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLandingPageContext } from "@/context/LandingPageContext";
import MobileMenu from "./MobileMenu";

// const menus = [
//   { id: 0, title: "Home", url: "/" },
//   {
//     id: 1,
//     title: "About Us",
//     url: "about-us",
//     submenu: [
//       { id: 11, title: "Our Story", url: "about/our-story" },
//       {
//         id: 12,
//         title: "Leadership",
//         url: "about/leadership",
//         submenu: [
//           {
//             id: 121,
//             title: "Board of Directors",
//             url: "about/leadership/board",
//           },
//           {
//             id: 122,
//             title: "Executive Team",
//             url: "about/leadership/executive",
//           },
//         ],
//       },
//       { id: 13, title: "Careers", url: "about/careers" },
//     ],
//   },
//   { id: 2, title: "Our Products", url: "our-products" },
//   { id: 3, title: "Contact Us", url: "contact-us" },
// ];

function DropdownMenu({ submenu }: { submenu: any[] }) {
  return (
    <ul className="absolute left-0 top-full mt-0 hidden min-w-[200px] bg-[#172d45]/90 backdrop-blur-md group-hover:block z-50">
      {submenu.map((sub) => (
        <li key={sub.id} className="relative group/submenu">
          <Link
            href={`${sub.url}`}
            className="block px-4 py-2 text-white hover:text-[#01A859]  transition-colors flex justify-between items-center"
            target={sub?.target}
          >
            {sub.title}
            {/* Arrow indicator */}
            {sub.submenu?.length > 0 && (
              <span className="ml-2 text-gray-400 group-hover/submenu:text-white">
                ▶
              </span>
            )}
          </Link>

          {/* Nested submenu */}
          {sub.submenu?.length > 0 && (
            <ul className="absolute left-full top-4 hidden min-w-[200px] bg-[#172d45]/90 backdrop-blur-md group-hover/submenu:block z-50">
              {sub.submenu.map((nested: any) => (
                <li key={nested.id}>
                  <Link
                    href={nested.url}
                    // target={nested?.target}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-white hover:text-[#01A859]  transition-colors"
                  >
                    {nested.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Header({
  innerHeader = false,
}: {
  innerHeader?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { navigationList, fetchNaviagtionList, bannerLoading } =
    useLandingPageContext();
  const { menus, logo, phone }: any = navigationList || {};

  useEffect(() => {
    fetchNaviagtionList();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (url: string) => {
    setMenuOpen(false);
    router.push(`${`/${url.replace(/^\/?/, "")}`}`);
  };

  const inactiveColor = innerHeader ? "text-gray-600" : "text-white";

  const handleLogoClick = () => {
    router.push("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  if (bannerLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        {/* <Loader /> */}
      </div>
    );

  return (
    <>
      {navigationList && (
        <div
          className={`sticky top-0 z-50 bg-[#172d45]/97 z-100 transition-all duration-300 ${
            isScrolled ? "backdrop-blur-md" : ""
          }`}
        >
          <div className="hero-sub-container ">
            <nav className="sub-container">
              <div className="flex items-center justify-between py-4">
                <div
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogoClick();
                  }}
                  className="cursor-pointer"
                >
                  {logo && (
                    <Image
                      src={logo}
                      alt="Logo"
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  )}
                </div>

                <ul className="hidden lg:flex gap-10 items-center">
                  {menus?.map((link: any) => {
                    const currentPath = pathname?.replace(/^\/?/, "");
                    const linkPath = link.url?.replace(/^\/?/, "");
                    const isHome = linkPath === "" || linkPath === "/";
                    const isActive = isHome
                      ? pathname === "/"
                      : currentPath === linkPath ||
                        currentPath.startsWith(`${linkPath}/`);

                    return (
                      <li
                        key={link.id}
                        className="relative group primary-font text-base"
                      >
                        {/* Main Link */}
                        <Link
                          href={`/${linkPath}`}
                          className={`${
                            isActive ? "text-[#01A859]" : inactiveColor
                          } hover:text-[#01A859] transition-colors`}
                        >
                          {link.title}
                        </Link>

                        {/* Submenu */}
                        {link.submenu?.length > 0 && (
                          <DropdownMenu submenu={link.submenu} />
                        )}
                      </li>
                    );
                  })}

                  {/* Call button */}
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
                  <FaBars color="#fff" />
                </div>
              </div>

              {/* Fullscreen Mobile Menu */}
              {menuOpen && (
                <div className="fixed inset-0 z-100 bg-[#172d45] text-white flex flex-col">
                  <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
                    <div
                      onClick={() => {
                        setMenuOpen(false);
                        handleLogoClick();
                      }}
                      className="cursor-pointer"
                    >
                      {logo && (
                        <Image
                          src={logo}
                          alt="Logo"
                          width={150}
                          height={60}
                          className="object-contain"
                        />
                      )}
                    </div>
                    <button
                      className="text-2xl"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FaTimes color="#fff" />
                    </button>
                  </div>

                  <div className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto">
                    {/* {menus?.map((link: any) => {
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
                      <Link
                        href={`tel:${phone}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="flex items-center gap-2 bg-[#01A859] text-white px-6 py-3 rounded-full font-semibold mt-6">
                          <FaPhoneAlt /> <span>{phone}</span>
                        </div>
                      </Link>
                    )} */}
                    <MobileMenu
                      menuOpen={menuOpen}
                      setMenuOpen={setMenuOpen}
                      menus={menus}
                      logo={logo}
                      phone={phone}
                      handleLogoClick={() => router.push("/")}
                      handleLinkClick={(url: any) => {
                        router.push(`/${url}`);
                        setMenuOpen(false);
                      }}
                    />
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
