"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import page from "./page";
import { Hero } from "./hero";

storyblokInit({
  components: {
    page: page,
    hero: Hero,
  },

  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
