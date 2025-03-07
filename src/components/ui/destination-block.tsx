import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export const DestinationBlock = ({ destination }: any) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div
          className="flex items-center mx-auto w-[90%] lg:w-[70%] justify-between bg-[#f8f8f8] p-6 cursor-pointer mb-4 lg:mb-0"
          onClick={() => handleOpenDropdown()}
        >
          <h2 className=" text-[30px] font-normal normal-case ">
            {destination.title}
          </h2>
          <BsPlusLg fontSize={30} color="#004e70" />
        </div>

        <div
          className={
            openDropdown
              ? "grid grid-cols-1 w-[90%] lg:w-[70%] mx-auto gap-4"
              : "hidden"
          }
        >
          <div className="relative w-[100%] h-[300px] lg:h-[500px]">
            <Image
              src={destination.destination_image.filename}
              fill
              alt={destination.destination_image.alt}
              className="object-cover"
            />
          </div>
          <div>{render(destination.destination_content)}</div>
        </div>
      </div>
    </>
  );
};
