import { DestinationCard } from "./ui/destination-card";

export const FilterDestinations = ({ blok, allDestinations }: any) => {
  const filterCategory = allDestinations.filter((item: any) => {
    return item.content.category.includes(blok.data);
  });

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-center text-[30px] uppercase font-normal mb-4">
        {blok.section_title}
      </h2>
      <div className="lg:grid grid-cols-4 gap-4 ">
        {filterCategory.map((item: any, index: number) => (
          <DestinationCard item={item} boolean={false} key={index} />
        ))}
      </div>
    </div>
  );
};
