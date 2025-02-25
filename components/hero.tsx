import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react";

export const Hero = ({ blok }: any) => {
  return (
    <div {...storyblokEditable}>
      <div
        className={`absolute w-full bg-[#0a0a0a]  z-10 ${
          blok.video ? "h-[90%] opacity-50" : "h-[60%] opacity-30"
        }`}
      ></div>

      {blok.video ? (
        <div className="relative w-full h-[90vh]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full object-cover h-[90vh]"
          >
            <source src={blok.hero_image.filename} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="relative w-full h-[60vh]">
          <Image
            src={blok.hero_image.filename}
            fill
            className="object-cover w-full h-full"
            alt={blok.hero_image.alt}
          />
        </div>
      )}
      <div
        className={`absolute top-1/2 text-white flex flex-col justify-center items-center gap-4 z-20 ${
          !blok.video && "left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        <h1>{blok.title}</h1>
        <div className="hero-text">{render(blok.content)}</div>
      </div>
    </div>
  );
};
