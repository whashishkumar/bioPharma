"use client";
import FaqSection from "@/components/Faq";
import InnovatingHealthcare from "@/components/InnovatingHealthcare";
import Marquee from "@/components/Marquee";
import OurBlogs from "@/components/OurBlog";
import OurCertifacation from "@/components/OurCertifacation";
import OutProducts from "@/components/OurProducts";
import OurTestimonials from "@/components/OurTestimonials";
import PcdOppurnity from "@/components/PCDOpportunity";
import PharmaCategories from "@/components/PharmaCategories";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/ui/Loader";
import { useEffect } from "react";

const services = [
  { text: "Cardiology", imageSrc: "/images/star.png" },
  { text: "Neurology", imageSrc: "/images/star.png" },
  { text: "Orthopedics", imageSrc: "/images/star.png" },
  { text: "Pediatrics", imageSrc: "/images/star.png" },
  { text: "Ophthalmology", imageSrc: "/images/star.png" },
  { text: "Cardiology", imageSrc: "/images/star.png" },
  { text: "Neurology", imageSrc: "/images/star.png" },
  { text: "Orthopedics", imageSrc: "/images/star.png" },
  { text: "Pediatrics", imageSrc: "/images/star.png" },
  { text: "Ophthalmology", imageSrc: "/images/star.png" },
];

export default function Home() {
  const { loading, login } = useAuth();

  useEffect(() => {
    login(`bioboxpharma@gmail.com`, `biobox@123`);
  }, []);

  // if (loading) return <Loader />;

  return (
    <>
      <Marquee items={services} speed={30} />
      <InnovatingHealthcare />
      <ProductCategories />
      <WhyChooseUs />
      <PharmaCategories />
      <OurCertifacation />
      <OutProducts />
      <PcdOppurnity />
      <FaqSection />
      <OurTestimonials />
      <OurBlogs />
    </>
  );
}
