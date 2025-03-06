"use client";
import { useEffect } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const cookieBotWrapper = document.getElementById("CookiebotWrapper");
    if (cookieBotWrapper) {
      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://consent.cookiebot.com/47e00487-0232-4f18-803f-d6ad9aa35571/cd.js";

      cookieBotWrapper.appendChild(script);
    }
  }, []);

  return (
    <div
      id="CookiebotWrapper"
      className="container px-4 mt-24 lg:mt-36 py-8"
    ></div>
  );
};

export default CookieConsent;
