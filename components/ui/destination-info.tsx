import { render } from "storyblok-rich-text-react-renderer";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const DestinationInfo = ({ destination }: any) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSecondDropdown, setOpenSecondDropdown] = useState(false);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleSecondDropdown = () => {
    setOpenSecondDropdown(!openSecondDropdown);
  };

  return (
    <div className="flex flex-col gap-12">
      <h2 className="-mb-12 pb-4">{destination.destination_title}</h2>
      <div className="destination-info">
        {render(destination.destination_info)}
      </div>

      <div
        className={
          `${destination.date_title}` !== "" ? "flex flex-col gap-4" : "hidden"
        }
      >
        <div className="flex gap-4">
          <span>
            <CiCalendarDate fontSize={30} />
          </span>
          <div className="flex flex-col">
            <h2 className="smaller-heading ">{destination.date_title}</h2>
            <div className="text-[18px]">{destination.date}</div>
          </div>
        </div>
        <div className="flex gap-4">
          <span>
            <CiLocationOn fontSize={30} />
          </span>
          <div className="flex flex-col">
            <h2 className="smaller-heading ">{destination.position_title}</h2>
            <div className="text-[18px]">{destination.position}</div>
          </div>
        </div>
        <div className="flex gap-4">
          <span>
            <IoTicketOutline fontSize={30} />
          </span>
          <div className="flex flex-col">
            <h2 className="smaller-heading ">{destination.price_title}</h2>
            <div className="text-[18px]">{destination.price}</div>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`${
            destination.dropdown_title
              ? "flex items-center justify-between gap-2 bg-[#f8f8f8] p-6 cursor-pointer"
              : "hidden"
          }`}
          onClick={() => handleDropdown()}
        >
          <h2>{destination.dropdown_title}</h2>
          <IoIosArrowDown
            fontSize={25}
            color="#004e70"
            className={`${openDropdown ? "rotate-180" : ""}`}
          />
        </div>
        {openDropdown && (
          <div className="mt-6 destination-info">
            {render(destination.dropdown_content)}
          </div>
        )}
      </div>
      <div>
        <div
          className={`${
            destination.second_dropdown_title
              ? "flex items-center justify-between gap-2 bg-[#f8f8f8] p-6 cursor-pointer"
              : "hidden"
          }`}
          onClick={() => handleSecondDropdown()}
        >
          <h2>{destination.second_dropdown_title}</h2>
          <IoIosArrowDown
            fontSize={25}
            color="#004e70"
            className={`${openSecondDropdown ? "rotate-180" : ""}`}
          />
        </div>
        {openSecondDropdown && (
          <div className="mt-6 destination-info">
            {render(destination.second_dropdown)}
          </div>
        )}
      </div>
    </div>
  );
};
