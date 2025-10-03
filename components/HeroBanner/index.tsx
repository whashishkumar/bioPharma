import React from "react";
import Header from "../Header";
import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import Button from "@/ui/Button";
import { useRouter } from "next/navigation";

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
        <section className={`relative ${innerBannerHeight}`}>
          <div
            className="absolute inset-0 bg-cover bg-center z-[-1]"
            style={{
              backgroundImage: !innerBanner
                ? `url(${heroData.image})`
                : `url(${heroData?.image}`,
            }}
          />
          <div className={`absolute inset-0 bg-black/40 z-[-1]`} />
          <div className="hero-sub-container">
            <Header />
            {innerBanner ? (
              <div className="flex justify-center mt-16">
                <PageTitle
                  heading={heroData?.section_name}
                  headingClass="text-[2.875rem] mt-2 font-normal text-[#fff] leading-[3.438rem]"
                />
              </div>
            ) : (
              <div className="text-white sub-container">
                <div className="lg:mt-25 grid md:grid-cols-2 lg:gap-20 gap-10 py-12">
                  {/* left side */}
                  <div className="mb-30">
                    <PageTitle
                      tag={heroData?.tag}
                      tagClass="text-white border rounded-full max-w-[180px] w-full sm:w-auto p-2 text-sm capitalize"
                      heading={heroData?.section_name}
                      headingClass="text-[2.875rem] mt-2 font-normal text-[#fff] leading-[3.438rem]"
                      subHeading={heroData?.section_heading}
                      subHeadingClass="text-xl font-normal mt-2 text-white tracking-wide"
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
                    <div className="flex flex-col md:flex-row items-center gap-8 mt-10 text-center md:text-left">
                      <div className="primary-font font-bold text-3xl flex flex-col md:flex-row items-center gap-2">
                        <h4>{heroData?.years}</h4>
                        <p className="primary-font font-normal text-sm whitespace-pre-line ">
                          {/* {heroData?.years_label} */}
                          {heroData?.years_label?.replace(
                            "Experience",
                            "\nExperience"
                          )}
                        </p>
                      </div>
                      <div className="flex -space-x-2">
                        {heroData?.members_images?.map(
                          (avatar: any, id: any) => (
                            <img
                              key={id}
                              src={`${avatar}`}
                              alt={"avaor"}
                              className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-contain"
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
                  <div className="flex justify-center lg:justify-end lg:pb-40 lg:pr-40">
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
