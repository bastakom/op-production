import { render } from "storyblok-rich-text-react-renderer";

export const TermsBlock = ({ blok }: any) => {
  return (
    <div className="w-[90%] mx-auto py-14 mt-20 lg:mt-10">
      <h2 className="text-start lg:text-center pb-5 text-[30px]">
        {blok.title}
      </h2>
      <div className="terms-content">{render(blok.content)}</div>
    </div>
  );
};
