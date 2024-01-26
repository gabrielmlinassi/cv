import Link from "next/link";
import { Heading } from "../typography/Heading";

const projects = [
  {
    date: 2022,
    title: "Keyboard Accordion",
    description: "Play the accordion with your keyboard!",
    article: "/",
    github: "/",
  },
  {
    date: 2022,
    title: "TakeNote",
    description: "A free, open source notes app for the web.",
    article: "/",
    github: "/",
  },
  {
    date: 2022,
    title: "Keyboard Accordion",
    description: "Play the accordion with your keyboard!",
    article: "/",
    github: "/",
  },
  {
    date: 2022,
    title: "TakeNote",
    description: "A free, open source notes app for the web.",
    article: "/",
    github: "/",
  },
  {
    date: 2022,
    title: "TakeNote",
    description: "A free, open source notes app for the web.",
    article: "/",
    github: "/",
  },
  {
    date: 2022,
    title: "TakeNote",
    description: "A free, open source notes app for the web.",
    article: "/",
    github: "/",
  },
];

export const Projects = () => {
  return (
    <section className="container pt-14">
      <Heading level="h2">Projects</Heading>
      <ol className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <li
            key={project.title}
            className="border bg-[#1f1f1f] p-6 rounded-lg border-[#2c2c2c]"
          >
            <time className="text-[#5eddac] text-sm font-mono">{project.date}</time>
            <p className="group-hover:underline underline-offset-2 decoration-2 font-medium">
              {project.title}
            </p>
            <p className="font-normal mt-1 mb-4 text-sm text-[#999]">
              {project.description}
            </p>
            <div className="space-x-1 text-sm font-normal">
              <Link
                href={project.article}
                className="bg-[#252525] p-2 rounded-lg leading-none"
              >
                Article
              </Link>
              <Link
                href={project.github}
                className="bg-[#252525] p-2 rounded-lg leading-none"
              >
                Demo
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
