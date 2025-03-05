import { Gallery } from "./gallery";

export const ImageGallery = ({ blok }: any) => {
  console.log(blok);
  return (
    <div>
      <Gallery blok={blok.image_gallery} />
    </div>
  );
};
