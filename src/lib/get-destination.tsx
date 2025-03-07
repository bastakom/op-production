import { getStoryblokApi } from "@storyblok/react";
import { redirect } from "next/navigation";

export async function getDestination(slug: string) {
  const lang = process.env.STORYBLOCK_LANG || "en";
  let sbParams = {
    version: "draft" as const,
    language: lang,
  };

  const client = getStoryblokApi();
  const slugName = slug || "default-slug";

  const data = await client.get(
    `cdn/stories/destinationer/${slugName}`,
    sbParams
  );

  if (!data) {
    throw new Error("Not Found");
  }

  return { data };
}
