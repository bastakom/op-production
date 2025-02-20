"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import page from "./page";
import { Hero } from "./hero";
import { Tiles } from "./tiles";
import { ImageBlock } from "./image-block";
import { Gallery } from "./gallery";

storyblokInit({
  components: {
    page: page,
    hero: Hero,
    tiles: Tiles,
    image_block: ImageBlock,
    gallery: Gallery,
  },

  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
