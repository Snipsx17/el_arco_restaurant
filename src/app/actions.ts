"use server";
import { Inputs } from "@/components/sections/contact/contactForm";
import * as Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

const TOKEN = process.env.MAILTRAP_TRANSPORT_TOKEN!;

type FormPayload = Inputs & { recaptchaToken: string };

const verifyRecaptcha = async (recaptchaToken: string): Promise<boolean> => {
  const FETCH_URL = "https://www.google.com/recaptcha/api/siteverify";
  const verifyRes = await fetch(FETCH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });
  const { success, score }: { success: boolean; score: number } =
    await verifyRes.json();

  if (!success || score < 0.5) {
    throw new Error("reCAPTCHA verification failed");
  }

  return true;
};

const createNodemailerTransport = () => {
  return Nodemailer.createTransport(
    MailtrapTransport({
      token: TOKEN,
    }),
  );
}

export async function submitForm(formData: FormPayload) {
  const { recaptchaToken, firstName, lastName, email, telephone, message } = formData;
  try {
    
  } catch (error) {
    await verifyRecaptcha(recaptchaToken);

  const transport = createNodemailerTransport();

  const sender = {
    address: "info@elarcorestaurante.com",
    name: "Web El Arco Restaurante",
  };
  const recipients = ["contact@uhernandez.com"];

  const emailSent = transport
    .sendMail({
      from: sender,
      to: recipients,
      subject: "Nuevo mensaje de la web",
      text: "Nuevo mensaje de la web",
      category: "Integration Test",
    })
  }
  
}

