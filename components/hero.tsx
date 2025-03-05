import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react";

export const Hero = ({ blok }: any) => {
  return (
    <div {...storyblokEditable}>
      <div
        className={`absolute w-[100%] bg-[#0a0a0a]  z-10 ${
          blok.video ? "h-[90vh] opacity-50" : "h-[56.5%] lg:h-[60%] opacity-30"
        }`}
      ></div>

      {blok.video ? (
        <div className="relative w-[100%] h-[90vh]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-[100%] object-cover h-[90vh]"
          >
            <source src={blok.hero_image.filename} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="relative w-[100%] h-[50vh] lg:h-[60vh]">
          <Image
            src={blok.hero_image.filename}
            fill
            className="object-cover w-[100%] h-full"
            alt={blok.hero_image.alt}
          />
        </div>
      )}
      <div
        className={`absolute top-[30%] lg:top-[30%] text-white flex flex-col lg:justify-center lg:items-center lg:gap-4 z-20 text-center lg:text-start ${
          !blok.video &&
          "left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[100%]"
        }`}
      >
        <h1 className="text-[30px] lg:text-[50px] ">{blok.hero_title}</h1>
        <div className="hero-text mx-auto mt-4 lg:mt-0">
          {render(blok.content)}
        </div>
      </div>
    </div>
  );
};
