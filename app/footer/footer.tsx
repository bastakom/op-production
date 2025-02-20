import { getSettings } from "@/lib/get-settings";
import { FooterSection } from "./footer-section";

export const Footer = async () => {
  const data = await getSettings();

  return <FooterSection settings={data.content} />;
};
