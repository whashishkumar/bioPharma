"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaPhoneAlt,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
  menus,
  logo,
  phone,
  handleLogoClick,
}: any) {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenuIds, setOpenMenuIds] = useState<number[]>([]);

  const toggleSubMenu = (id: number) => {
    setOpenMenuIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // const handleLinkClick = (url: string) => {
  //   router.push(`${url}`);
  //   setMenuOpen(false);
  // };

  const handleLinkClick = (url: string) => {
    // If URL is missing or empty, do nothing
    if (!url || url.trim() === "") return;
    if (url.startsWith("http")) {
      // External link
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      // Internal link
      router.push(`${url.startsWith("/") ? url : `/${url}`}`);
    }

    setMenuOpen(false);
  };

  const isActive = (url: string) =>
    pathname === `/${url}` || pathname.startsWith(`/${url}/`);

  if (!menuOpen) return null;

  return (
    <div className="">
      {/* Scrollable Menu */}
      <div className="flex-1 flex flex-col gap-4 p-6 overflow-y-auto">
        {menus?.map((link: any) => (
          <MenuItem
            key={link.id}
            item={link}
            level={0}
            openMenuIds={openMenuIds}
            toggleSubMenu={toggleSubMenu}
            handleLinkClick={handleLinkClick}
            isActive={isActive}
          />
        ))}

        {/* Phone Button */}
        {phone && (
          <Link
            href={`tel:${phone}`}
            onClick={() => setMenuOpen(false)}
            className="mt-8"
          >
            <div className="flex items-center justify-center gap-2 bg-[#01A859] text-white px-6 py-3 rounded-full font-semibold">
              <FaPhoneAlt /> <span>{phone}</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

/* Recursive menu component */
function MenuItem({
  item,
  level,
  openMenuIds,
  toggleSubMenu,
  handleLinkClick,
  isActive,
}: any) {
  const hasChildren = item.submenu?.length > 0;
  const isOpen = openMenuIds.includes(item.id);

  return (
    <div
      key={item.id}
      className={`border-b border-gray-700 pb-2 pl-${level * 4}`}
    >
      <div className="flex justify-between items-center">
        <button
          onClick={() =>
            hasChildren ? toggleSubMenu(item.id) : handleLinkClick(item.url)
          }
          className={`flex-1 text-left text-lg font-medium ${
            isActive(item.url) ? "text-[#01A859]" : "text-white"
          }`}
        >
          {item.title}
        </button>

        {hasChildren && (
          <button
            onClick={() => toggleSubMenu(item.id)}
            className="ml-2 text-white"
            aria-label="Toggle submenu"
          >
            {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
          </button>
        )}
      </div>

      {/* Submenu */}
      {hasChildren && isOpen && (
        <div className="pl-4 mt-2 flex flex-col gap-2">
          {item.submenu.map((sub: any) => (
            <MenuItem
              key={sub.id}
              item={sub}
              level={level + 1}
              openMenuIds={openMenuIds}
              toggleSubMenu={toggleSubMenu}
              handleLinkClick={handleLinkClick}
              isActive={isActive}
            />
          ))}
        </div>
      )}
    </div>
  );
}
