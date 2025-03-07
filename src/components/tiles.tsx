import { render } from "storyblok-rich-text-react-renderer";

export const Tiles = ({ blok }: any) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10 lg:p-32 lg:mt-0 mb-10 lg:mb-0">
      <h2>{blok.title}</h2>
      <div className="px-4 lg:w-[60%] text-center lg:px-0 tiles-content">
        {render(blok.content)}
      </div>
    </div>
  );
};
