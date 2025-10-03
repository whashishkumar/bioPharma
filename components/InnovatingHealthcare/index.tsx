"use client";
import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import Button from "@/ui/Button";
import { useLandingPageContext } from "@/context/LandingPageContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const avatars = [
  { id: 1, src: "/icons/Figure.png", alt: "Avatar 1" },
  { id: 2, src: "/icons/Figure.png", alt: "Avatar 2" },
  { id: 3, src: "/icons/Figure.png", alt: "Avatar 3" },
];

export default function InnovatingHealthcare() {
  const router = useRouter();
  const { aboutUs, loading, fetchAboutSection } = useLandingPageContext();
  const {
    section_name,
    section_heading,
    section_sub_heading,
    button,
    custom_data,
    images,
  }: any = aboutUs || {};

  useEffect(() => {
    fetchAboutSection();
  }, []);

  return (
    <div className="bg-white">
      <div className="hero-sub-container">
        <div className="sub-container ">
          <div className=" py-16 relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[40%_60%] gap-10 py-14">
            <div className="relative">
              <div className="relative w-full h-64 lg:h-[500px]">
                {images?.[0] && (
                  <Image
                    src={images?.[0]}
                    alt="bg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                  />
                )}
                <div className="absolute top-0 left-0 w-full h-full bg-black/10 rounded-3xl"></div>
              </div>
              <div className="absolute bottom-[5%] left-[5%] lg:left-[10%] lg:bottom-[15%] bg-white/40 backdrop-blur-[25px] p-4 w-[85%] sm:w-[60%] lg:w-[240px] rounded-lg border border-[#FFFFFF1A]">
                <div className="flex -space-x-2 mt-2 justify-center">
                  <div className="flex -space-x-3">
                    {avatars.map((avatar) => (
                      <img
                        key={avatar.id}
                        className="inline-block h-10 w-10 rounded-full ring-1 ring-white object-contain"
                        src={avatar.src}
                        alt={avatar.alt}
                      />
                    ))}
                  </div>
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-1 ring-white object-contain"
                    src="/icons/addicon.png"
                    alt="Avatar 3"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black primary-font text=[#172C45] mt-2 text-center">
                  Proven Track Record
                </h3>
              </div>
            </div>
            <div>
              <PageTitle
                tag={section_name}
                tagClass="border rounded-full max-w-[160px] w-full sm:w-auto p-2 text-sm capitalize text-[#172C45] leading-[16px]"
                heading={section_heading}
                headingClass="text-[2.875rem] mt-2 font-normal  text-[#172C45]  leading-[3.438rem]"
                subHeading={section_sub_heading}
                subHeadingClass="text-base font-normal mt-2 text-[ #45566A] leading-[25px] 
"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 mt-4">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center gap-5">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                        {custom_data?.[0]?.image && (
                          <Image
                            src={custom_data?.[0]?.image}
                            alt="Quality"
                            width={24}
                            height={24}
                          />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-[#172C45] leading-[23px] w-auto  min-w-[99px] w-auto max-w-[110px]  ">
                        {custom_data?.[0]?.name}
                      </h3>
                    </div>

                    <div className="flex-1 border-l border-[#E8EAED] pl-4">
                      <p className="text-gray-600 text-base leading-[24px] font-medium">
                        {custom_data?.[0]?.value}
                      </p>
                    </div>
                  </div>
                  <hr className="border-l border-[#E8EAED]" />
                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center gap-5 primary-font">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                        {custom_data?.[1]?.image && (
                          <Image
                            src={custom_data?.[1]?.image}
                            alt="Quality"
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-[#172C45] leading-[23px] min-w-[99px] w-auto max-w-[110px]  ">
                        {custom_data?.[1]?.name}
                      </h3>
                    </div>
                    <div className="flex-1 border-l border-[#E8EAED] pl-4">
                      <p className="text-gray-600 text-base leading-[24px] font-medium">
                        {custom_data?.[1]?.value}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <Button
                    children={button?.[0]?.name}
                    onClick={() => router.push(`${button?.[0]?.value}`)}
                  />
                </div>

                {/* <div>
                  {images?.[1] && (
                    <Image
                      src={images?.[1]}
                      alt="Laboratory"
                      width={300}
                      height={274}
                      className="rounded-xl object-cover"
                    />
                  )}
                </div> */}
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  {images?.[1] && (
                    <Image
                      src={images[1]}
                      alt="Laboratory"
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
