import { getStoryblokApi } from "@storyblok/react";
import { redirect } from "next/navigation";

export async function getAllDestinations(slug: string) {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();
  const slugName = slug;

  try {
    const data = await client.get(
      `cdn/stories/destinationer/${slugName}`,
      sbParams
    );

    if (!data) {
      throw new Error("Not Found");
    }

    return { data };
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
}
