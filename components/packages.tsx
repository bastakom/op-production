"use client";

import { Hero } from "./hero";
import { DestinationCard } from "./ui/destination-card";

export const Packages = ({ destination, allDestinations, settings }: any) => {
  return (
    <div>
      <Hero blok={destination} />

      <div className="flex flex-col gap-4 w-[90%] mx-auto">
        <h2 className="text-center text-[30px] capitalize font-normal">
          {settings.destination_title}
        </h2>
        <div className="lg:grid grid-cols-4 gap-4 ">
          {allDestinations
            .filter((item: any) => item.content.category.includes("popular"))
            .map((item: any, index: number) => (
              <DestinationCard item={item} boolean={true} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};
