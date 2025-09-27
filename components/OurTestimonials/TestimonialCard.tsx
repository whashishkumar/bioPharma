import Image from "next/image";

export default function TestimonialCard({ testimonials }: any) {
  return (
    <>
      {testimonials?.map((item: any) => (
        <div key={item.id} className="bg-[#fff] rounded-2xl  overflow-hidden">
          <div className="flex flex-col md:flex-row h-full">
            <div className="relative bg-[#183B56] w-[260px]  md:flex-[1]">
              <Image
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full opacity-90"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center md:flex-[1.2]">
              <div className="text-5xl font-serif text-[#183B56] mb-4 leading-none">
                &#8220;
              </div>
              <p className="text-base sm:text-lg italic text-[#45566A] mb-4 sm:mb-6 border-b border-[#172C451A] pb-4 sm:pb-6 red-hat">
                {item.text}
              </p>
              <p className="text-xl sm:text-xl font-semibold text-[#172C45] mt-2 red-hat">
                {item.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
