import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    id: 1,
    image: "/images/arti1.jpg",
    alt: "Scientists in an environmental lab monitoring climate change",
    title: "The Role of Environmental Labs in Climate Change Monitoring",
    link: "/climate-monitoring",
  },
  {
    id: 2,
    image: "/images/arti2.jpg",
    alt: "Research team analyzing environmental samples",
    title: "From Samples to Solutions How Our Lab Supports Public Health",
    link: "/green-energy",
  },
  {
    id: 3,
    image: "/images/arti3.jpg",
    alt: "Water testing for pollution control",
    title: "Case Spotlight Water Quality Research That Saved a Community",
    link: "/water-quality",
  },
];

const BlogPostCard = ({ blogs }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogs?.map((item: any, id: number) => {
        const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
        const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
        const imageUrl = `${baseUrl}${imagePath}/${item.image}`;
        return (
          <div key={id} className="bg-white  flex flex-col h-full">
            <div className="relative h-60 w-full overflow-hidden rounded-[20px] ">
              <Image
                src={imageUrl}
                alt={"blog banner"}
                layout="fill"
                objectFit="cover"
                className="rounded-t-[20px]"
                priority
              />
            </div>
            <div className="py-6 flex flex-col flex-grow">
              <p className="text-lg font-semibold text-[#172C45] mb-4 red-hat">
                {item?.name}
              </p>
              <button className="mt-auto">
                <p className="text-lg font-semibold text-[#172C45] red-hat flex gap-2 items-center">
                  Learn More
                  <ArrowUpRight size={18} />
                </p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPostCard;
