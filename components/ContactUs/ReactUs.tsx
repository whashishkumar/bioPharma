"use client";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function ReachUs({ data, menu }: any) {
  const socialIcons = [
    <FaFacebookF key="facebook" />,
    <FaXTwitter key="twitter" />,
    <FaInstagram key="instagram" />,
    <FaLinkedin key="linkedin" />,
  ];
  return (
    <section className="flex flex-col gap-10 ">
      <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden">
        <iframe
          src={data?.company_iframe}
          title="Company Location"
          className="w-full h-full object-cover rounded-2xl"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#172C45] uppercase">
            Reach Us Through
          </h2>
          <p className="flex items-start gap-3 text-[#45566A] text-base md:text-lg leading-7">
            <IoLocationSharp className="text-[#45566A] mt-1" size={25} />
            <span>
              {data?.address.split(",").map((part: string, idx: number) => (
                <span key={idx}>
                  {part.trim()}
                  <br />
                </span>
              ))}
            </span>
          </p>
          <p className="flex items-center gap-3 text-[#45566A] text-base md:text-lg leading-7">
            <FaPhone className="text-[#45566A]" />
            <a href={`tel:${data?.contact_phone}`}>{data?.contact_phone}</a>
          </p>
          <p className="flex items-center gap-3 text-[#45566A] text-base md:text-lg leading-7">
            <MdEmail className="text-[#45566A]" />
            <a href={`mailto:${data?.contact_email}`}>{data?.contact_email}</a>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-bold text-[#172C45] uppercase">
            Social Networks
          </h2>
          {menu?.map((social: any, index: any) => (
            <Link
              key={index}
              href={social?.url}
              target="_blank"
              className="flex items-center gap-3 text-[#45566A] text-base md:text-lg leading-7 "
            >
              {socialIcons[index]}
              <span>{social?.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
