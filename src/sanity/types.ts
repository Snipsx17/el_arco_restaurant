import { SanityImageSource } from "@sanity/image-url";

export type WithImage<T> = T & { image: SanityImageSource };
export type WithProcessedImage<T> = Omit<T, "image"> & { image: string | null };

export interface Button {
  label: string;
  url: string;
  isPrimary: boolean;
}

// Raw data interfaces (from Sanity)
export interface HeroSection {
  _type: "heroSection";
  _key: string;
  title: string;
  subtitle?: string;
  text?: string;
  image: SanityImageSource;
  buttons?: Button[];
}

export interface AboutSection {
  _type: "aboutSection";
  _key: string;
  pretitle?: string;
  title: string;
  description?: string;
  highlightText?: string;
  additionalText?: string;
  image?: SanityImageSource;
  button?: Button;
}

export interface Proposal {
  proposalTitle: string;
  proposalDescription: string;
  image: SanityImageSource;
}

// Processed data interfaces (with URL strings)
export interface ProcessedHeroSection extends Omit<HeroSection, "image"> {
  image: string;
}

export interface ProcessedProposal extends Omit<Proposal, "image"> {
  image: string;
}

interface Proposals {
  mainProposal: Proposal;
  firstProposal: Proposal;
  secondProposal: Proposal;
  thirdProposal: Proposal;
}

export interface ProcessedProposals {
  mainProposal?: ProcessedProposal;
  firstProposal?: ProcessedProposal;
  secondProposal?: ProcessedProposal;
  thirdProposal?: ProcessedProposal;
}

export interface GastronomicProposal {
  _type: "gastronomicProposalSection";
  _key: string;
  pretitle?: string;
  title: string;
  description?: string;
  proposals: Proposals;
}

export interface ProcessedGastronomicProposal extends Omit<
  GastronomicProposal,
  "proposals"
> {
  proposals: ProcessedProposals;
}

export interface TerraceSection {
  _type: "terraceSection";
  _key: string;
  pretitle?: string;
  title: string;
  description?: string;
  image: SanityImageSource;
}

export interface LocationSection {
  _type: "locationSection";
  _key: string;
  pretitle?: string;
  title: string;
  description?: string;
  images: {
    image1: SanityImageSource;
    image2: SanityImageSource;
    image3: SanityImageSource;
  };
}

export interface carrouselImage {
  alt: string;
  asset: SanityImageSource;
  caption: string;
}

export interface HistorySection {
  _type: "historySection";
  _key: string;
  pretitle?: string;
  title: string;
  description?: string;
  images: carrouselImage[];
}

export type Section =
  | HeroSection
  | AboutSection
  | GastronomicProposal
  | TerraceSection
  | LocationSection
  | HistorySection;

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
