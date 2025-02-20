import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export const ImageBlock = ({ blok }: any) => {
  return (
    <div className=" grid grid-cols-2 ">
      <div
        className={`flex flex-col justify-center p-12 px-20 ${
          blok.image_left && "imageLeft"
        }`}
      >
        <h2>{blok.title}</h2>
        <div>{render(blok.content)}</div>
      </div>
      <div className="imgWrapper">
        <img
          src={blok.image.filename}
          alt={blok.image.alt}
          className="w-[100%] h-[506px] imgSection"
        />
      </div>
    </div>
  );
};
