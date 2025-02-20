import { Packages } from "@/components/packages";
import { getAllDestinations } from "@/lib/get-all-destinations";
import { getData } from "@/lib/get-data";

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  console.log(pathname);
  const paket = await getData(pathname);
  const destinations = await getAllDestinations(pathname);

  return (
    <div>
      <Packages paket={paket?.data?.data?.story} />
    </div>
  );
};

export default page;
