import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export const ImageBlock = ({ blok }: any) => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 ">
      <div
        className={`flex flex-col justify-center p-4 lg:p-12 lg:px-20 ${
          blok.image_left && "imageLeft"
        }`}
      >
        <h2 className="mb-2">{blok.title}</h2>
        <div>{render(blok.content)}</div>
      </div>
      <div className="imgWrapper relative w-[100%] h-[506px]">
        <Image
          src={blok.image.filename}
          alt={blok.image.alt}
          fill
          className="object-cover imgSection"
        />
      </div>
    </div>
  );
};
