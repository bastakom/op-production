"use client";

import Image from "next/image";
import { useState } from "react";

export const Gallery = ({ blok }: any) => {
  const [visibleImages, setVisibleImages] = useState(4);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleImages((prev) => prev + 4);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="lg:py-10 mb-10 lg:mb-0">
      <div className="flex justify-center mt-16 lg:mt-20 mr-auto">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-[100%]">
          {blok.images.slice(0, visibleImages).map((el: any, index: number) => {
            return (
              <div
                key={index}
                className="relative !w-[90vw] md:!w-[45vw] mb-4 lg:mb-0 lg:!w-[21.8vw] min-h-[50vh] group"
                style={{
                  height: "300px",
                }}
              >
                <Image
                  src={el.image.filename}
                  fill
                  className="object-cover w-[100%] h-full transition-all duration-300 ease-in-out"
                  alt={el.image.alt}
                />

                {el.sublime && el.title && (
                  <div className="absolute top-0 left-0 w-full h-full bg-[#004e70] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <div className="absolute top-0 left-0 w-full h-full text-center  text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <h3 className="mb-2 text-[18px] font-bold">{el.title}</h3>
                  <span className="text-[14px] text-center p-4">
                    {el.sublime}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {visibleImages < blok.images.length && (
        <div className="flex justify-center mt-6">
          <button
            className="buttonRounded"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? `Laddar...` : `Ladda fler`}
          </button>
        </div>
      )}
    </div>
  );
};
