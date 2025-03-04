"use client";

import { BookingForm } from "./form/booking-form";
import { NewsLetterForm } from "./form/news-letter-form";
import { Gallery } from "./gallery";
import { Hero } from "./hero";
import { DestinationBlock } from "./ui/destination-block";
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
        <BookingForm selectOption={destination.show_package_option_form} />
      </div>
      {destination.table_columns && destination.table_columns.length > 0 && (
        <Tabel destination={destination} />
      )}

      {destination?.destination_image?.filename &&
        destination.destination_image.filename !== "" && (
          <DestinationBlock destination={destination} />
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
      <NewsLetterForm settings={settings} />
    </div>
  );
};
