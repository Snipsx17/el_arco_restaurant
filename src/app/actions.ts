"use server";
import { Inputs } from "@/components/sections/contact/contactForm";
import * as Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
import { contactFormTemplate } from "@/templates/email";

interface FormActionResponse {
  success: string | null;
  error: string | null;
}

const MAILTRAP_TOKEN = process.env.MAILTRAP_TRANSPORT_TOKEN!;
const FORM_DESTINATION_EMAIL = process.env.FORM_EMAIL_RECEIVER!;


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
      token: MAILTRAP_TOKEN,
    }),
  );
};

export async function submitForm(
  formData: FormPayload,
): Promise<FormActionResponse> {
  const { recaptchaToken, firstName, lastName, email, telephone, message } =
    formData;
  try {
    await verifyRecaptcha(recaptchaToken);

    const transport = createNodemailerTransport();

    const sender = {
      address: "info@elarcorestaurante.com",
      name: "Web El Arco Restaurante Calpe",
    };
    const recipients = [FORM_DESTINATION_EMAIL];

    await transport.sendMail({
      from: sender,
      to: recipients,
      subject: "Nuevo mensaje de la web",
      html: contactFormTemplate(firstName, lastName, email, telephone, message),
      category: "Web",
    });

    return { success: "Mensaje enviado", error: null };
  } catch (error) {
    let errorResponse: FormActionResponse = { success: null, error: null };

    if (error instanceof Error) {
      errorResponse = {
        success: null,
        error: error.message,
      };
    }
    return errorResponse;
  }
}
