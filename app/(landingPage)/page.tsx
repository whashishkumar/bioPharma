"use client";
import ByQuality from "@/components/DrivenByQuality";
import FaqSection from "@/components/Faq";
import InnovatingHealthcare from "@/components/InnovatingHealthcare";
import Marquee from "@/components/Marquee";
import OurBlogs from "@/components/OurBlog";
import OurCertifacation from "@/components/OurCertifacation";
import OurProducts from "@/components/OurProducts";
import OurTestimonials from "@/components/OurTestimonials";
import PcdOppurnity from "@/components/PCDOpportunity";
import PharmaCategories from "@/components/PharmaCategories";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";

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
  return (
    <>
      {/* <Marquee items={services} speed={30} /> */}
      {/* <InnovatingHealthcare /> */}
      <ByQuality />
      <ProductCategories />
      <WhyChooseUs />
      <PharmaCategories />
      <OurCertifacation />
      <OurProducts />
      <PcdOppurnity />
      <FaqSection />
      <OurTestimonials />
      <OurBlogs />
    </>
  );
}
