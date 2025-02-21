import { Packages } from "@/components/packages";
import { getDestination } from "@/lib/get-destination";
import { getData } from "@/lib/get-data";
import { getAllDestinations } from "@/lib/get-all-destinations";
import { getSettings } from "@/lib/get-settings";

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = (await params).slug;
  const destination = await getDestination(pathname);
  const allDestinations = await getAllDestinations();
  const settings = await getSettings();

  return (
    <div>
      <Packages
        destination={destination.data.data.story.content}
        allDestinations={allDestinations.data.data.stories}
        settings={settings.content}
      />
    </div>
  );
};

export default page;
