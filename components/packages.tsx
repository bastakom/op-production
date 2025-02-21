"use client";

import { Hero } from "./hero";
import useStore from "./utils/store";

export const Packages = ({ destination }: any) => {
  console.log(destination);
  return (
    <div>
      <Hero blok={destination} />
    </div>
  );
};
