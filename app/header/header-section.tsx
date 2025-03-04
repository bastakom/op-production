/* "use client";

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

 */

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
    <header
      className={`absolute px-5 top-0 flex  items-center w-full py-5 z-50`}
    >
      <Link href="/" className="flex justify-center text-white">
        <Image src={settings.logo.filename} width={131} height={50} alt="" />
      </Link>
      <div className={`flex justify-end fixed right-5 top-2`}>
        <TbMenu
          size={80}
          strokeWidth={0.5}
          color="white"
          className={` ${
            openMenu ? "hidden" : "block"
          } cursor-pointer text-[60px] mt-5 lg:mt-0 lg:text-[80px] transition-all ease-linear ${
            scroll ? "bg-[#004e70] rounded-full p-2" : "bg-transparent"
          }   `}
          onClick={() => setOpenMenu(true)}
        />

        <nav
          className={`pb-8 lg:pb-0  bg-white w-[100vw] h-[100vh] lg:w-[35vw] lg:h-[100vh] absolute -top-2 -right-5 lg:-top-2 lg:-right-5 transition-all duration-500 ${
            openMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between px-8 lg:px-10 pt-8">
            <Link href="/" onClick={() => setOpenMenu(false)}>
              <Image
                src={settings.logo.filename}
                width={94}
                height={76}
                alt=""
              />
            </Link>
            <TfiClose
              fontSize={40}
              color="black"
              className="cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          </div>

          <ul className="font-kis-normal flex flex-col pl-8 lg:pl-16 pt-16 gap-3">
            {settings.menu.map((el: any, index: number) => {
              return (
                <Link
                  href={`/${el.link.cached_url}`}
                  key={index}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  className={`text-[38px] lg:text-[40px] text-black  underline-offset-8  hover:text-[#f26627]
                  `}
                >
                  {el.link_title}
                </Link>
              );
            })}
          </ul>

          <div className="flex justify-center mt-14 lg:mt-32">
            <hr className="w-[80%] color-black opacity-20 border-t-2" />
          </div>
        </nav>
      </div>
    </header>
  );
};
