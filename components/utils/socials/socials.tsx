"use client";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const Socials = ({ props }: any) => {
  if (props.some_option === "fb") {
    return (
      <Link href={props.link.cached_url}>
        <FaFacebookF fontSize={30} />
      </Link>
    );
  } else if (props.some_option === "ig") {
    return (
      <Link href={props.link.cached_url}>
        <FaInstagram fontSize={30} />
      </Link>
    );
  } else {
    return <span>No valid option</span>;
  }
};
