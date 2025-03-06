"use client";

import { FilterPackages } from "./filter-packages";
import { BookingForm } from "./form/booking-form";
import { NewsLetterForm } from "./form/news-letter-form";
import { Gallery } from "./gallery";
import { Hero } from "./hero";
import { DestinationBlock } from "./ui/destination-block";
import { DestinationInfo } from "./ui/destination-info";
import { Tabel } from "./ui/tabel";

export const Packages = ({ destination, allDestinations, settings }: any) => {
  return (
    <div>
      <Hero blok={destination} />

      <div
        className={`grid gap-12 py-14 ${
          destination.hide_booking_form
            ? "grid-cols-1 w-[90%] lg:w-[70%] mx-auto -mb-20"
            : "grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto"
        }`}
      >
        <DestinationInfo destination={destination} />
        {destination.hide_booking_form ? null : (
          <BookingForm selectOption={destination.show_package_option_form} />
        )}
      </div>
      {destination.table_columns && destination.table_columns.length > 0 && (
        <Tabel destination={destination} />
      )}

      {destination?.destination_image?.filename &&
        destination.destination_image.filename !== "" && (
          <DestinationBlock destination={destination} />
        )}

      {destination?.image_gallery && (
        <Gallery blok={destination.image_gallery} />
      )}

      <div
        className={
          destination.filter
            ? "flex flex-col gap-4 w-[90%] mx-auto lg:py-14 mt-5 lg:mt-0"
            : "hidden"
        }
      >
        <h2 className="text-center text-[30px] capitalize font-normal">
          {settings.destination_title}
        </h2>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {destination?.filter?.map((itemData: any) => {
            return allDestinations
              .filter((item: any) =>
                item.content.category.includes(itemData.data)
              )
              .map((filteredItem: any) => {
                return filteredItem.content._uid === destination._uid ? null : (
                  <FilterPackages
                    item={filteredItem}
                    boolean={true}
                    key={filteredItem.id}
                  />
                );
              });
          })}
        </div>
      </div>
      <NewsLetterForm settings={settings} />
    </div>
  );
};
