"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const dummyFooterData = {
  logo: "/images/logo.png",
  site_description:
    "Biobox Pharma is committed to delivering high-quality, affordable pharmaceutical solutions.",
  social_icons: [
    { name: "Facebook", url: "#", icon: <FaFacebookF size={20} /> },
    { name: "Twitter", url: "#", icon: <FaTwitter size={20} /> },
    { name: "Instagram", url: "#", icon: <FaInstagram size={20} /> },
    { name: "LinkedIn", url: "#", icon: <FaLinkedinIn size={20} /> },
  ],
  quick_links: [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Our Products", url: "/products" },
    { id: 4, title: "Our services", url: "/services" },
    { id: 5, title: "Contact Us", url: "/contact" },
  ],
  categories: [
    { id: 1, title: "Cardiology", slug: "cardiology" },
    { id: 2, title: "Neurology", slug: "neurology" },
    { id: 3, title: "Orthopedics", slug: "orthopedics" },
    { id: 4, title: "Pediatrics", slug: "pediatrics" },
  ],
  company_iframe:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434!2d144.955651!3d-37.817323",
  copyright: "BioBox Pharma",
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

  return (
    <footer className="bg-[#172C45] text-white rounded-lg relative overflow-hidden px-6 py-10 md:px-16 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          {logo && (
            <div className="bg-white rounded-md w-52 h-24 flex items-center justify-center">
              <Image
                src={"/images/bioLogo.png"}
                alt="Logo"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
          )}
          <p className="text-sm">{site_description}</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {quick_links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="hover:text-green-500 transition-colors list-disc"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg">Categories</h4>
          <ul className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/our-products/${cat.slug}`}
                  className="hover:text-green-500 transition-colors"
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Map */}
          <div className="mt-4 w-full h-48 rounded-lg overflow-hidden">
            <iframe
              src={company_iframe}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="Company Location"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-10 border-t border-white/20 pt-4">
        ©{new Date().getFullYear()} {copyright}
      </div>
    </footer>
  );
}
