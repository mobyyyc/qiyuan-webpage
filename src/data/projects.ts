export type Project = {
  id: number;
  title: string;
  description: string;
  url?: string | null;
  repo?: string | null;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Website",
    description: "This website built with Next.js and an ASP.NET backend (demo).",
    url: null,
    repo: "https://github.com/mobyyyc/qiyuan-webpage",
  },
  {
    id: 2,
    title: "ML Experiments",
    description: "Small chatbot trained on various datasets.",
    url: null,
    repo: null,
  },
];
