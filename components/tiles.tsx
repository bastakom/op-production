import { render } from "storyblok-rich-text-react-renderer";

export const Tiles = ({ blok }: any) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-32">
      <h2>{blok.title}</h2>
      <div className="w-[60%] text-center">{render(blok.content)}</div>
    </div>
  );
};
