import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const page = ({ blok, allDestinations, settings }: any) => (
  <div {...storyblokEditable(blok)}>
    {blok &&
      Array.isArray(blok.body) &&
      blok.body.map((nestedBlok: any, index: number) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          allDestinations={allDestinations}
          settings={settings}
        />
      ))}
  </div>
);

export default page;
