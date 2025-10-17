export type Project = {
  id: number;
  title: string;
  subtitle?: string | null;
  description: string;
  languages?: string[];
  learned?: string[];
  url?: string | null;
  repo?: string | null;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Website",
    subtitle: "Next.js · Tailwind CSS · TypeScript",
  description: "Personal website showcasing projects and contact information. Built with Next.js (App Router) and Tailwind CSS with a focus on fast static generation, responsive layouts, accessible components, and a theme toggle.",
    languages: ["TypeScript", "Next.js", "Tailwind CSS"],
    learned: [
      "Static site generation",
      "Tailwind responsive layouts",
      "App Router patterns",
    ],
    url: null,
    repo: "https://github.com/mobyyyc/qiyuan-webpage",
  },
  {
    id: 2,
    title: "Gemini Chatbot (demo)",
    subtitle: "Next.js · Google Gemini API · Server API",
  description: "A demo chatbot focused on implementing Google Gemini and calling it from a server-side API proxy. This is for personal experimentation with the Gemini API and server-side testing in Next.js.",
    languages: ["TypeScript", "Next.js", "Tailwind CSS"],
    learned: ["Integrating the Gemini API", "Server-side API routing", "Safe env var usage"],
    url: null,
    repo: "https://github.com/mobyyyc/gemini-chatbot-demo",
  },
];
