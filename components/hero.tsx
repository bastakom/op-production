import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export const Hero = ({ blok }: any) => {
  return (
    <div>
      <div className="absolute w-full bg-[#0a0a0a] opacity-50 z-10 h-[90%]"></div>
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
      <div className="absolute top-1/2 text-white flex flex-col justify-center items-center gap-4 z-20">
        <h1>{blok.title}</h1>
        <div className="hero-text">{render(blok.content)}</div>
      </div>
    </div>
  );
};
