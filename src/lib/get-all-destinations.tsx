import { getStoryblokApi } from "@storyblok/react";
import { redirect } from "next/navigation";
export async function getAllDestinations() {
  const language = process.env.STORYBLOCK_LANG || "en";
  let sbParams = {
    version: "draft" as const,
    language: language,
    starts_with: "destinationer",
  };
  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories`, sbParams);
  if (!data) {
    throw new Error("Not Found");
  }
  return { data };
}
