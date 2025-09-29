import PageTitle from "@/ui/PageTitle";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import SwipeSlider from "@/ui/SwipeSlider";

const testimonials = [
  {
    id: 1,
    name: "Grace Martin",
    text: "You'll meet with our scientific advisor to define your research goals, scope, and budget. You'll meet with our scientific advisors to define your research.",
    image: "/images/Figure.png",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Our team will work closely with you to understand your project requirements, ensuring a clear plan and achievable milestones for success.",
    image: "/images/Figure.png",
  },
  {
    id: 3,
    name: "Grace Martin",
    text: "You'll meet with our scientific advisor to define your research goals, scope, and budget. You'll meet with our scientific advisors to define your research.",
    image: "/images/Figure.png",
  },
  {
    id: 4,
    name: "John Doe",
    text: "Our team will work closely with you to understand your project requirements, ensuring a clear plan and achievable milestones for success.",
    image: "/images/Figure.png",
  },
];

export default function OurTestimonials() {
  return (
    <>
      <div className="hero-sub-container">
        <div className="bg-product-category rounded-[20px]">
          <div className="hero-child-container">
            <div className="py-14">
              <PageTitle
                tag="Our Testimonials"
                tagClass="border border-[#00A859] rounded-full px-4 py-1 text-sm sm:text-base capitalize text-[#172C45] leading-4 sm:leading-5 w-max"
                heading="What our clients say about their experience with us"
                headingClass="text-2xl sm:text-3xl md:text-[2.875rem] mt-2 font-normal text-[#172C45] leading-snug sm:leading-normal md:leading-[3.438rem] mt-6 max-w-full sm:max-w-xl md:max-w-2xl text-center"
                wrapperClass="w-full mx-auto px-4"
                tagWrapper="flex flex-col items-center"
              />
              <div className="my-8">
                <SwipeSlider
                  slidesPerView={2}
                  bottomSwipeBtn={false}
                  swipebtn={true}
                  spaceBetween={10}
                >
                  {testimonials?.map((product) => (
                    <TestimonialCard key={product.id} {...product} />
                  ))}
                </SwipeSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
