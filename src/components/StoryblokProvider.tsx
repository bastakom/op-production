"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import page from "./page";
import { Hero } from "./hero";
import { Tiles } from "./tiles";
import { ImageBlock } from "./image-block";
import { Gallery } from "./gallery";
import { ImageNavigationBlock } from "./image-navigation-block";
import { FilterDestinations } from "./filter-destinations";
import { TermsBlock } from "./terms-block";
import { ImageGallery } from "./image-gallery";
import { FilterPackages } from "./filter-packages";

storyblokInit({
  components: {
    page: page,
    hero: Hero,
    tiles: Tiles,
    image_block: ImageBlock,
    gallery: Gallery,
    image_navigation_block: ImageNavigationBlock,
    filter_destinations: FilterDestinations,
    terms: TermsBlock,
    image_gallery: ImageGallery,
    filter: FilterPackages,
  },

  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
