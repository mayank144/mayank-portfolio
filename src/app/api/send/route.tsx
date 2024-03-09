import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL;

export async function POST(req: Request, res: Response) {
  console.log("POST function called");
  const { email, subject, message } = await req.json();
  console.log({ email, subject, message });
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [TO_EMAIL, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
