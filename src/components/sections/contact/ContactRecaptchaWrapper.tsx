"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactForm from "./contactForm";

export default function ContactRecaptchaWrapper() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}
