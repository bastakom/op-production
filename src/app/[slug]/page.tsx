import { getAllDestinations } from "@/lib/get-all-destinations";
import { getData } from "@/lib/get-data";
import { StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";
//test

type Params = Promise<{ slug: string }>;
const Page = async ({ params }: { params: Params }) => {
  const pathname = (await params).slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await getData(slugName);
  const allDestinations = await getAllDestinations();
  return (
    <StoryblokStory
      story={story}
      allDestinations={allDestinations.data.data.stories}
    />
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = (await params).slug;
  const slugName = pathname;

  const data = await getData(slugName);

  if (!data) {
    return {
      title: "OP Productions",
      description: "Default description",
    };
  }

  return {
    title: data?.content?.seo?.title || "OP Productions",
    description: data?.content?.seo?.description || "Default description",
  };
};

export default Page;
