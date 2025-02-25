import Image from "next/image";
import Link from "next/link";

export const ImageNavigationBlock = ({ blok }: any) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 pb-20 lg:w-[90%] lg:mx-auto">
      <h2 className="mb-8 text-[40px]">{blok.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center ">
        {blok.image_block.map((el: any) => (
          <Link
            href={el.link.cached_url}
            key={el._uid}
            className="relative w-[400px] h-[400px] shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={el.image.filename}
              alt={el.image.alt}
              fill
              className="object-cover w-[100%] h-full "
            />
            <h3 className="absolute bottom-0 w-[100%] text-center text-[21px] underline bg-white py-4">
              {el.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
