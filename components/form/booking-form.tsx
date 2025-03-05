import Link from "next/link";
import { useState } from "react";

export const BookingForm = ({ selectOption }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    event: "",
    persons: "",
    hotel: "",
    packages: [] as string[],
    additionalInformation: "",
    discount: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "hotel") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (name === "packages") {
      const updatedPackages = formData.packages.includes(value)
        ? formData.packages.filter((pkg) => pkg !== value)
        : [...formData.packages, value];
      setFormData((prevData) => ({
        ...prevData,
        [name]: updatedPackages,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/booking-form", {
        method: "POST",
        headers: { content: "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          name: "",
          number: "",
          email: "",
          event: "",
          persons: "",
          hotel: "",
          packages: [],
          additionalInformation: "",
          discount: "",
        });
      }
    } catch {
      throw new Error("failed");
    }
  };

  return (
    <div>
      <h2 className="mb-4">Bokningsförfrågan</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">För- och efternamn*</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="För- och efternamn"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full"
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="number">Telefonnummer*</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Telefonnummer"
              value={formData.number}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <label htmlFor="event">Match/event*</label>
        <input
          type="text"
          name="event"
          id="event"
          placeholder="Match/event"
          value={formData.event}
          onChange={handleInputChange}
        />
        <label htmlFor="persons">Antal personer*</label>
        <input
          type="number"
          name="persons"
          id="persons"
          placeholder="Antal personer"
          value={formData.persons}
          onChange={handleInputChange}
        />

        {selectOption ? (
          <>
            <label htmlFor="hotel">Paket</label>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="packageOne"
                  name="packages"
                  value="paket 1"
                  checked={formData.packages.includes("paket 1")}
                  onChange={handleInputChange}
                  className="w-[20px] h-[20px]"
                />
                <label htmlFor="packageOne">Paket 1</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="packageTwo"
                  name="packages"
                  value="paket 2"
                  checked={formData.packages.includes("paket 2")}
                  onChange={handleInputChange}
                  className="w-[20px] h-[20px]"
                />
                <label htmlFor="packageTwo">Paket 2</label>
              </div>
            </div>
          </>
        ) : (
          <>
            <label htmlFor="hotel">Hotell*</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center lg:gap-2">
                <input
                  type="radio"
                  id="yes"
                  name="hotel"
                  value="yes"
                  checked={formData.hotel === "yes"}
                  onChange={handleInputChange}
                />
                <label htmlFor="yes">Ja</label>
              </div>
              <div className="flex items-center lg:gap-2">
                <input
                  type="radio"
                  id="no"
                  name="hotel"
                  value="no"
                  checked={formData.hotel === "no"}
                  onChange={handleInputChange}
                />
                <label htmlFor="no">Nej</label>
              </div>
            </div>
          </>
        )}

        <label htmlFor="additionalInformation">
          Övrig information, tex önskemål enkelrum.
        </label>
        <input
          type="text"
          name="additionalInformation"
          value={formData.additionalInformation}
          onChange={handleInputChange}
        />
        <label htmlFor="discount">Rabattkod</label>
        <input
          type="text"
          name="discount"
          value={formData.discount}
          onChange={handleInputChange}
        />
        <div>
          Genom att klicka på skicka godkänner jag OPProductions{" "}
          <Link href={"/integritetspolicy"} className="underline">
            policy för behandling av personuppgifter.
          </Link>
        </div>

        <button
          className="w-[128px] h-[50px] text-[14px] bg-[#28303d] text-white mt-4"
          type="submit"
        >
          Skicka
        </button>
      </form>
    </div>
  );
};
