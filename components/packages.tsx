"use client";

import { BookingForm } from "./form/booking-form";
import { Gallery } from "./gallery";
import { Hero } from "./hero";
import { DestinationCard } from "./ui/destination-card";
import { DestinationInfo } from "./ui/destination-info";
import { Tabel } from "./ui/tabel";

export const Packages = ({ destination, allDestinations, settings }: any) => {
  console.log(destination);
  return (
    <div>
      <Hero blok={destination} />

      <div className="grid grid-cols-2 w-[90%] mx-auto gap-12 py-14">
        <DestinationInfo destination={destination} />
        <BookingForm />
      </div>
      {destination.table_columns && destination.table_columns.length > 0 && (
        <Tabel destination={destination} />
      )}

      {destination.field &&
        destination.field.map((item: any) => (
          <Gallery blok={item} key={item._uid} />
        ))}

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
