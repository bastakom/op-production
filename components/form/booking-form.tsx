import Link from "next/link";
import { useState } from "react";

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          message: "",
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
        <input type="text" name="event" id="" placeholder="Match/event" />
        <label htmlFor="persons">Antal personer*</label>
        <input
          type="number"
          name="persons"
          id=""
          placeholder="Antal personer"
        />

        <label htmlFor="hotel">Hotell*</label>
        <div className="flex gap-4">
          <div>
            <input type="radio" id="yes" name="hotel" value="yes" />
            <label htmlFor="yes">Ja</label>
          </div>
          <div>
            <input type="radio" id="no" name="hotel" value="no" />
            <label htmlFor="no">Nej</label>
          </div>
        </div>
        <label htmlFor="additionalInformation">
          Övrig information, tex önskemål enkelrum.
        </label>
        <input type="text" name="additionalInformation" />
        <label htmlFor="discount">Rabattkod</label>
        <input type="text" name="discount" />
        <div>
          {" "}
          Genom att klicka på skicka godkänner jag OPProductions{" "}
          <Link href={"#"} className="underline">
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
