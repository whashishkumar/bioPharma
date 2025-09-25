import PageTitle from "@/ui/PageTitle";
import Image from "next/image";
import Button from "@/ui/Button";

const avatars = [
  { id: 1, src: "/icons/Figure.png", alt: "Avatar 1" },
  { id: 2, src: "/icons/Figure.png", alt: "Avatar 2" },
  { id: 3, src: "/icons/Figure.png", alt: "Avatar 3" },
];

export default function InnovatingHealthcare() {
  return (
    <div className="bg-white">
      <div className="hero-sub-container">
        <div className="sub-container ">
          <div className=" py-16 relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[40%_60%] gap-10 py-14">
            <div className="relative">
              <div className="relative w-full h-64 sm:h-[320px] md:h-[350px] lg:w-[500px] lg:h-[500px]">
                <Image
                  src="/images/bannerH.jpg"
                  alt="bg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/10 rounded-3xl"></div>
              </div>
              <div className="absolute bottom-[60px] left-[80px]  bg-white/40  backdrop-blur-[25px] p-4 w-[240px] rounded-lg border border-[#FFFFFF1A]">
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
                tag="Why choose us"
                tagClass="border rounded-full w-[160px] p-2 text-sm capitalize text-[#172C45] leading-[16px]"
                heading="Innovating Healthcare with Quality, Trust & Commitment"
                headingClass="text-[2.875rem] mt-2 font-normal  text-[#172C45]  leading-[3.438rem]"
                subHeading="At Biobox Pharma, we are committed to delivering high-quality, affordable pharmaceutical solutions.  Our focus on innovation, patient safety, and regulatory excellence ensures better healthcare outcomes.  With a strong distribution network, we aim to make trusted medicines accessible worldwide."
                subHeadingClass="text-base font-normal mt-2 text-[ #45566A] leading-[25px]"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 mt-4">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center gap-5">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                        <Image
                          src="/icons/q.png"
                          alt="Quality"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-[#172C45] leading-[23px]  w-[99px]">
                        Quality Excellence
                      </h3>
                    </div>

                    <div className="flex-1 border-l border-[#E8EAED] pl-4">
                      <p className="text-gray-600 text-base leading-[24px] font-medium">
                        Delivering pharmaceutical products that meet global
                        quality and safety standards.
                      </p>
                    </div>
                  </div>
                  <hr className="border-l border-[#E8EAED]" />
                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center gap-5 primary-font">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                        <Image
                          src="/icons/ino.png"
                          alt="Quality"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-[#172C45] leading-[23px] w-[99px]">
                        Innovation Focused
                      </h3>
                    </div>
                    <div className="flex-1 border-l border-[#E8EAED] pl-4">
                      <p className="text-gray-600 text-base leading-[24px] font-medium">
                        Developing advanced formulations to address evolving
                        healthcare needs.
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <Button children={"Contact Us"} />
                </div>

                <div>
                  <Image
                    src="/images/inovbg.jpg"
                    alt="Laboratory"
                    width={307}
                    height={274}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
