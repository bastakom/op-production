"use client";

import { Socials } from "@/components/utils/socials/socials";
import Link from "next/link";

export const FooterSection = ({ settings }: any) => {
  return (
    <footer className="grid grid-cols-3  p-24 pb-4">
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

      <div className="flex flex-col gap-4">
        <h3>{settings.terms_title}</h3>
        {settings.terms_links.map((el: any) => (
          <Link href={el.link.cached_url} key={el._uid} className="text-[14px]">
            {el.link_title}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-4">
        {settings.some_links.map((el: any) => (
          <Socials props={el} key={el._uid} />
        ))}
      </div>

      <div className="flex justify-end w-[85vw]">
        <div className="flex flex-row relative w-[100px] h-[100px]  ">
          <img
            src={settings.swish_logo.filename}
            className="object-contain fill "
            alt={settings.swish_logo.alt}
          />
          <img
            src={settings.izettle_logo.filename}
            className="object-contain fill "
            alt={settings.izettle_logo.alt}
          />
        </div>
      </div>
    </footer>
  );
};
