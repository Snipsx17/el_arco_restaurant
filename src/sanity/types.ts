
export interface HeroButton {
  label: string
  url: string
  isPrimary: boolean
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
export type Section = HeroSection

export interface HomePage {
  sections: Section[]
}