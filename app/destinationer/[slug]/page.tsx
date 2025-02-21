import { Packages } from "@/components/packages";
import { getDestination } from "@/lib/get-destination";
import { getData } from "@/lib/get-data";

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = (await params).slug;
  const destination = await getDestination(pathname);

  return (
    <div>
      <Packages destination={destination.data.data.story.content} />
    </div>
  );
};

export default page;
