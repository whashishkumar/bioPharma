import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import InnovatingHealthcare from "@/components/InnovatingHealthcare";
import Marquee from "@/components/Marquee";
import OurCertifacation from "@/components/OurCertifacation";
import OutProducts from "@/components/OurProducts";
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
    <div className="">
      <HeroBanner />
      <Marquee items={services} speed={30} />
      <InnovatingHealthcare />
      <ProductCategories />
      <WhyChooseUs />
      <PharmaCategories />
      <OurCertifacation />
      <OutProducts />
      <Footer />
    </div>
  );
}
