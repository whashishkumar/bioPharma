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
  const { navigationList, fetchNaviagtionList, bannerLoading } =
    useLandingPageContext();
  const { menus, logo, phone }: any = navigationList || {};

  useEffect(() => {
    fetchNaviagtionList();
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
        <div className="sticky top-0 z-50 bg-[#172d45]/97 z-100">
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
                        <Link
                          href={`/${linkPath}`}
                          className={`${
                            isActive ? "text-[#01A859]" : inactiveColor
                          } hover:text-[#01A859] transition-colors`}
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
                  className="lg:hidden text-2xl cursor-pointe"
                  onClick={() => setMenuOpen(true)}
                >
                  <FaBars color="#fff" />
                </div>
              </div>

              {/* Fullscreen Mobile Menu */}
              {menuOpen && (
                <div className="fixed inset-0 z-100 bg-[#172d45] text-white flex flex-col">
                  {/* Header inside menu */}
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
                      <Link
                        href={`tel:${phone}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="flex items-center gap-2 bg-[#01A859] text-white px-6 py-3 rounded-full font-semibold mt-6">
                          <FaPhoneAlt /> <span>{phone}</span>
                        </div>
                      </Link>
                    )}
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
