import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

export const NewsLetterForm = ({ settings }: any) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (event: any) => {
    event.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const payload = await res.json();
    if (payload.success) {
      alert(payload.message);
    } else {
      alert("Failed to subscribe to newsletter");
    }
  };

  return (
    <div id="mc_embed_shell">
      <Link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"></Link>

      <div
        id="mc_embed_signup"
        className="w-full flex justify-center mt-6 mb-6 md:mt-10 md:mb-16 lg:mb-6"
      >
        <form
          action="https://wptpadel.us13.list-manage.com/subscribe/post?u=6aa9cfbc3d8900a7eb5546b9f&amp;id=e260c3901c&amp;f_id=005f7fe9f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate bg-[#004E70] py-10 lg:w-[60%] lg:h-[30%] p-4 lg:p-10 flex flex-col gap-4 rounded lg:mb-10 md:w-[100%]"
          target="_blank"
          onSubmit={handleSubscribe}
        >
          <div id="mc_embed_signup_scroll">
            <h2 className="uppercase text-white text-center text-[18px] pb-5">
              {settings.heading}
            </h2>
            <div className="mc-field-group relative">
              <input
                type="email"
                name="EMAIL"
                className="required email w-full rounded p-5"
                id="mce-EMAIL"
                required
                placeholder="Ange din e-postadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="clear">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="absolute right-1 mt-[0.35rem] top-0 w-[140px] bg-[#28303d] text-white rounded hover:bg-[#f26627] flex items-center justify-center text-center z-20 cursor-pointer"
                  value="Prenumerera"
                />
              </div>
            </div>
            <div>
              <input type="hidden" name="tags" value="6657499,6658099" />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response mt-4 text-red text-center"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response mt-4 text-white text-center"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_6aa9cfbc3d8900a7eb5546b9f_e260c3901c"
                tabIndex={-1}
                value={undefined}
              />
            </div>
          </div>
        </form>
      </div>

      <Script
        strategy="afterInteractive"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></Script>

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function() {
  var fnames = [];
  var ftypes = [];

  fnames[0] = 'EMAIL'; ftypes[0] = 'email';
  fnames[1] = 'FNAME'; ftypes[1] = 'text';
  fnames[2] = 'MMERGE2'; ftypes[2] = 'text';
  fnames[3] = 'ADDRESS'; ftypes[3] = 'address';
  fnames[4] = 'PHONE'; ftypes[4] = 'phone';
  fnames[5] = 'BIRTHDAY'; ftypes[5] = 'birthday';
  fnames[6] = 'MMERGE6'; ftypes[6] = 'text';
  fnames[7] = 'MMERGE7'; ftypes[7] = 'text';
})();
`,
        }}
        id="newsletter-script"
      ></Script>
    </div>
  );
};
