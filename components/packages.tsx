"use client";

import { BookingForm } from "./form/booking-form";
import { Hero } from "./hero";
import { DestinationCard } from "./ui/destination-card";
import { DestinationInfo } from "./ui/destination-info";
import { Tabel } from "./ui/tabel";

export const Packages = ({ destination, allDestinations, settings }: any) => {
  return (
    <div>
      <Hero blok={destination} />

      <div className="grid grid-cols-2 w-[90%] mx-auto gap-12 py-14">
        <DestinationInfo destination={destination} />
        <BookingForm />
      </div>
      <Tabel destination={destination} />
      <div className="flex flex-col gap-4 w-[90%] mx-auto lg:py-14">
        <h2 className="text-center text-[30px] capitalize font-normal">
          {settings.destination_title}
        </h2>
        <div className="lg:grid grid-cols-4 gap-4">
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
