import type { Metadata } from "next";
import "../app/globals.scss";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "OP Productions",
  description:
    "OP Productions är en erfaren och passionerad resebyrå specialiserad på sportevenemang och biljetthantering till konserter.Med över 20 års branscherfarenhet och ledande roller på Nordens största sportresearrangör erbjuder vi expertis och kunskap för världsklassarrangemang.",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
          <Script src="https://consent.cookiebot.com/uc.js" />
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="47e00487-0232-4f18-803f-d6ad9aa35571"
            data-blockingmode="manual"
            type="text/javascript"
            async
          ></script>
        </body>
      </html>
    </StoryblokProvider>
  );
}
