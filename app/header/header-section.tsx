"use client";

import useStore from "@/components/utils/store";
import { TbMenu } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeaderSection = ({ settings }: any) => {
  const { openMenu, setOpenMenu } = useStore();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

/* 
"use client";

import Image from "next/image";
import Link from "next/link";

import { TbMenu } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";

import { useEffect, useState } from "react";
import useStore from "@/components/utils/store";

export const HeaderSection = ({ settings }: any) => {
  const { menu } = settings;
  const { openMenu, setOpenMenu } = useStore();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`absolute px-5 top-0 flex justify-center items-center lg:w-[100%] py-5 z-50`}
    >
      
      <div className={`flex justify-end fixed right-5 top-2 lg:hidden`}>
        <TbMenu
          size={80}
          strokeWidth={0.5}
          color="white"
          className={` ${openMenu ? "hidden" : "block"} ${
            scroll ? "bg-[#569fd4] rounded-full p-2" : "bg-transparent"
          }   cursor-pointer text-[60px] mt-5 lg:mt-0 lg:text-[80px] transition-all ease-linear  `}
          onClick={() => setOpenMenu(true)}
        />
      </div>

     
      <nav
        className={`lg:w-[35vw] w-[100vw] h-[100vh] absolute top-0 right-0 bg-white z-50 lg:static lg:bg-transparent 
        transition-transform duration-500 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end px-8 lg:px-10 pt-8">
          <TfiClose
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />
        </div>

        <ul className="font-kis-normal flex flex-col items-center lg:items-start lg:pl-16 pt-16 md:gap-8 gap-3">
          {menu.map((el: any, index: number) => {
            return (
              <Link
                href={el.link.cached_url}
                key={index}
                onClick={() => setOpenMenu(false)}
                className={`text-[38px] lg:text-[40px] relative hover:underline decoration-black underline-offset-8 `}
              >
                {el.title}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
 */
