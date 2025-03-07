import { getStoryblokApi } from "@storyblok/react/rsc";

export const getSettings = async () => {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/settings`, sbParams);

  if (!data) {
    throw new Error("Not Found");
  }

  return data.data.story;
};
