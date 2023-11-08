/// <reference types="vite/client" />

interface Environment {
  web3PublicAccessKey: string;
}

interface SocialLink {
  social: "github" | "linkedin";
  uiName: string;
  url: string;
  icon: "logos:linkedin" | "logos:github";
}

interface Education {
  degree: string;
  school: string;
  gradMonth: string;
  gradYear: string;
}

interface Experience {
  title: string;
  company: string;
  companyDescription?: string;
  startEndDate: string;
  detailItems: string[];
}
