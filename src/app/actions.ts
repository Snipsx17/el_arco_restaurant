"use server";
import { Inputs } from "@/components/sections/contact/contactForm";
import * as Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

const TOKEN = process.env.MAILTRAP_TRANSPORT_TOKEN!;

type FormPayload = Inputs & { recaptchaToken: string };

export async function submitForm(formData: FormPayload) {
  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${formData.recaptchaToken}`,
  });
  const { success, score }: { success: boolean; score: number } = await verifyRes.json();

  if (!success || score < 0.5) {
    throw new Error("reCAPTCHA verification failed");
  }

  const transport = Nodemailer.createTransport(
    MailtrapTransport({
      token: TOKEN,
    }),
  );

  const sender = {
    address: "info@elarcorestaurante.com",
    name: "Web El Arco Restaurante",
  };
  const recipients = ["contact@uhernandez.com"];

  transport
    .sendMail({
      from: sender,
      to: recipients,
      subject: "Nuevo mensaje de la web",
      text: "Nuevo mensaje de la web",
      category: "Integration Test",
    })
    .then(console.log, console.error);
  console.log("Message sent");
}

