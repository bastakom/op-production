import { Packages } from "@/components/packages";
import { getDestination } from "@/lib/get-destination";
import { getData } from "@/lib/get-data";
import { getAllDestinations } from "@/lib/get-all-destinations";
import { getSettings } from "@/lib/get-settings";
import { Metadata } from "next";

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

export const generateMetadata = async ({
  params,
}: {
  params: { slug: any };
}): Promise<Metadata> => {
  const pathname = (await params).slug;
  const slugName = pathname;

  const destination = await getDestination(pathname);

  if (!destination) {
    return {
      title: "OP Productions",
      description: "Default description",
    };
  }

  return {
    title:
      destination?.data?.data?.story?.content?.seo?.title || "OP Productions",
    description:
      destination?.data?.data?.story?.content?.seo?.description ||
      "Default description",
  };
};

export default page;
