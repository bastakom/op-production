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
    <div className="py-10">
      <div className="flex justify-center mt-16 lg:mt-20 mr-auto">
        <div className="lg:grid grid-cols-4 gap-2 max-w-[100%]">
          {blok.images.slice(0, visibleImages).map((el: any, index: number) => {
            return (
              <div
                key={index}
                className="relative !w-[85vw] mb-4 lg:mb-0 lg:!w-[21.8vw] min-h-[50vh] group"
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
