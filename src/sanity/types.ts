import { SanityImageSource } from "@sanity/image-url";

export interface HeroButton {
  label: string;
  url: string;
  isPrimary: boolean;
}

export interface HeroSection {
  _type: "heroSection";
  _key: string;
  title: string;
  subtitle?: string;
  text?: string;
  image: string | null | undefined;
  buttons?: HeroButton[];
}

// Cuando agregues más secciones, creas su interface y la unes aquí
export type Section = HeroSection;

export interface HomePage {
  sections: Section[];
}

export interface NavLink {
  label: string;
  url: string;
}

export interface NavButton {
  label: string;
  url: string;
}

export interface Navbar {
  logo: SanityImageSource;
  logoUrl?: string | null;
  links?: NavLink[];
  button?: NavButton;
}