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

export type Section = HeroSection | AboutSection | GastronomicProposal;

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