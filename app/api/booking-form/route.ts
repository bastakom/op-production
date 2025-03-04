import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: Request) {
  const {
    name,
    number,
    email,
    persons,
    event,
    packages,
    hotel,
    additionalInformation,
    discount,
  } = await req.json();

  const messageBody = `
    <div style="background-color: #f9f9f9; padding: 20px;">
    <h1>Bokningsförfrågan</h1>
      <p>Meddelande från: ${name}</p>
      <h3>Email: ${email}</h3>
      <h3>Telefon: ${number}</h3>
       <p>Match/Event: ${event}</p>
      <p>Antal personer: ${persons}</p>
        <p>Hotell: ${hotel}</p>
        <p>Paket: ${packages}</p>
        <p>Övrig information: ${additionalInformation}</p>
        <p>Rabattkod: ${discount}</p>
       
    </div>
  `;
  try {
    const { data, error } = await resend.emails.send({
      from: "Notifikation: Bokningsförfrågan <onboarding@resend.dev>",
      to: ["andrea@bastakompisar.se"],
      subject: "Meddelande",
      html: messageBody,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
