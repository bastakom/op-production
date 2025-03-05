import { Gallery } from "./gallery";

export const ImageGallery = ({ blok }: any) => {
  return (
    <div>
      <Gallery blok={blok.image_gallery} />
    </div>
  );
};
