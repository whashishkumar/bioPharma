import React from "react";
import Header from "../Header";
import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import Button from "@/ui/Button";
import { useRouter } from "next/navigation";
import SwipeSlider from "@/ui/SwipeSlider";

interface HeroBannerProps {
  heroData: {
    backgroundImage: string;
    overlay: string;
    tag?: string;
    heading?: string;
    subHeading?: string;
    buttons: Array<{
      id: string | number;
      label: string;
      variant?: string;
    }>;
    stats?: {
      years?: string | number;
      text?: string;
      clients?: string | number;
    };
    avatars?: Array<{
      id: string | number;
      src: string;
      alt: string;
    }>;
    sideImage: {
      src: string;
      height: number;
      width: number;
      alt: string;
    };
  };
}

const heroBackgrounds = [
  { id: 1, image: "/images/header-image.jpg" },
  { id: 2, image: "/images/header-image.jpg" },
  { id: 3, image: "/images/header-image.jpg" },
];

const breakpoints = {
  640: { slidesPerView: 1 },
  768: { slidesPerView: 1 },
  1024: { slidesPerView: 1 },
  1280: { slidesPerView: 1 },
};

export default function HeroBanner({
  heroData,
  innerBanner,
  innerBannerHeight,
}: any) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${heroData?.link_image}`;
  const router = useRouter();

  const handleRedirect = (value: string) => {
    router.push(value);
  };

  return (
    <>
      {heroData && (
        <section className={`relative ${innerBannerHeight} -mt-[5.75rem]`}>
          <div className="border-2">
            {!innerBanner ? (
              <div className="absolute inset-0 z-[-1] ">
                <SwipeSlider
                  slidesPerView={1}
                  bottomSwipeBtn={false}
                  swipebtn={false}
                  spaceBetween={0}
                  autoPlay={true}
                  breakpoints={breakpoints}
                >
                  {heroBackgrounds.map((bg) => (
                    <div
                      key={bg.id}
                      className="h-[52rem] w-full bg-center md:bg-cover lg:bg-cover bg-no-repeat "
                      style={{
                        backgroundImage: `url(${bg.image})`,
                      }}
                    />
                  ))}
                </SwipeSlider>
              </div>
            ) : (
              <div
                className="absolute inset-0 bg-cover z-[-1] bg-no-repeat"
                style={{ backgroundImage: `url(${heroData?.image})` }}
              />
            )}
            <div className={`absolute inset-0 bg-black/40 z-[-1]`} />
          </div>

          <div className="hero-sub-container">
            {innerBanner ? (
              <div className="flex justify-center pt-42">
                <PageTitle
                  heading={heroData?.section_name}
                  headingClass="text-[2.875rem] mt-2 font-normal text-[#fff] leading-[3.438rem]"
                />
              </div>
            ) : (
              <div className="text-white sub-container">
                <div className="-mt-25 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  lg:gap-20  py-12 ">
                  {/* left side */}
                  <div className="mb-30 mt-50">
                    <PageTitle
                      tag={heroData?.tag}
                      tagClass="text-white border rounded-full w-auto inline-block px-4 py-2 text-sm capitalize pb-3"
                      heading={heroData?.section_name}
                      headingClass="text-3xl leading-[3rem] md:text-[2.875rem] md:leading-[3.438rem] lg:text-[2.875rem] mt-6 font-normal text-[#fff] lg:leading-[3.438rem]"
                      subHeading={heroData?.section_heading}
                      subHeadingClass="text-[1rem] lg:text-[1.5rem] font-normal mt-1 text-white leading-[3.438rem] "
                    />
                    {/* buttons */}
                    <div className="lg:flex gap-8 mt-6">
                      {heroData?.buttons?.map((btn: any, id: any) => (
                        <Button
                          key={id}
                          variant={btn.variant}
                          onClick={() => handleRedirect(btn?.value)}
                        >
                          {btn.name}
                        </Button>
                      ))}
                    </div>

                    {/* stats + avatars */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mt-10 text-center md:text-left hidden md:flex lg:flex">
                      <div className="primary-font font-bold text-3xl flex flex-col md:flex-row items-center gap-2">
                        <h4 className="text-4xl">{heroData?.years}</h4>
                        <p className="primary-font font-normal text-sm whitespace-pre-line ">
                          {/* {heroData?.years_label} */}
                          {heroData?.years_label?.replace(
                            "Experience",
                            "\nExperience"
                          )}
                        </p>
                      </div>
                      <div className="flex -space-x-3">
                        {heroData?.members_images?.map(
                          (avatar: any, id: any) => (
                            <img
                              key={id}
                              src={`${avatar}`}
                              alt={"avaor"}
                              className="inline-block h-12 w-12 rounded-full  object-cover"
                            />
                          )
                        )}
                      </div>
                      <div className="primary-font text-sm flex flex-col items-center md:items-start">
                        <p>{heroData?.custom_fields?.name}</p>
                        <p className="primary-font font-bold text-sm">
                          {heroData?.custom_fields?.value}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* right side image */}
                  <div className="flex justify-center lg:justify-end  lg:pr-30 hidden  lg:flex">
                    {heroData?.link_image && (
                      <Image
                        src={heroData?.link_image}
                        height={110}
                        width={110}
                        alt={"link"}
                        className="object-contain"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
