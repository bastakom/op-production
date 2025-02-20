import { getSettings } from "@/lib/get-settings";
import { HeaderSection } from "./header-section";

export const Header = async () => {
  const data = await getSettings();

  return <HeaderSection settings={data.content} />;
};
