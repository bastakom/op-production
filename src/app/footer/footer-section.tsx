"use client";

import { Socials } from "@/components/utils/socials/socials";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = ({ settings }: any) => {
  return (
    <footer className="text-center lg:text-start grid md:grid-cols-3 p-10 lg:p-24 lg:pb-4">
      <div>
        {settings.contact.map((el: any) => (
          <div key={el._uid} className="flex flex-col gap-4 ">
            <h3>{el.title}</h3>
            <Link href={`mailto:${el.mail.cached_url}`}>{el.mail.url}</Link>
            <Link href={`tel:${el.number}`}>{el.number}</Link>
            <div>{el.location}</div>
            <div>{el.adress}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 lg:mt-0 flex flex-col gap-4">
        <h3>{settings.terms_title}</h3>
        {settings.terms_links.map((el: any) => (
          <Link
            href={`/${el.link.cached_url}`}
            key={el._uid}
            className="text-[14px]"
          >
            {el.link_title}
          </Link>
        ))}
      </div>
      <div className="mt-10 lg:mt-0 flex justify-center lg:justify-start flex-row gap-4">
        {settings.some_links.map((el: any) => (
          <Socials props={el} key={el._uid} />
        ))}
      </div>

      <div className="mt-4 justify-center lg:mt-0 flex md:justify-end md:w-[85vw] w-[100%]">
        <div className="flex flex-row relative justify-center lg:justify-start w-[100px] h-[100px]">
          <Image
            src={settings.swish_logo.filename}
            width={100}
            height={100}
            className="object-contain"
            alt={settings.swish_logo.alt}
          />
          <Image
            src={settings.izettle_logo.filename}
            width={100}
            height={100}
            className="object-contain"
            alt={settings.izettle_logo.alt}
          />
        </div>
      </div>
    </footer>
  );
};
