"use client";

import Image from "next/image";
import Link from "next/link";

export const HeaderSection = ({ settings }: any) => {
  return (
    <header className="flex flex-row p-6 justify-evenly items-center">
      <div className="relative w-[100px] h-[100px]">
        <Link href="/home">
          <Image
            src={settings.logo.filename}
            alt={settings.logo.alt}
            fill
            className="object-contain "
          />
        </Link>
      </div>

      <nav className="flex justify-center flex-row gap-8 uppercase">
        {settings.menu.map((el: any) => {
          return (
            <Link
              href={el.link.cached_url}
              key={el._uid}
              className="active:text-[#f26627] hover:text-[#f26627]"
            >
              {el.link_title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
