export type Project = {
  date: number;
  title: string;
  description: string;
  article: string;
  github: string;
};

export type Experience = {
  image: { src: string };
  company: string;
  role: string;
  period: string;
  site: string;
};

export type Post = {
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  image: {
    src: string;
    alt: string;
  };
};
