import { Packages } from "@/components/packages";
import { getDestination } from "@/lib/get-destination";
import { getData } from "@/lib/get-data";

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  console.log(pathname);
  //const paket = await getData(pathname);

  const destination = await getDestination(pathname);
  console.log(destination.data.data.story);

  return (
    <div>
      {" "}
      <Packages destination={destination.data.data.story} />{" "}
    </div>
  );
};

export default page;
