import { Project } from "@/domain/types";
import { ProjectCard } from "./ProjectCard";

const projects: Project[] = [
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
    title: "Chip8",
    description: "A retro game emulator for three platforms.",
    article: "/",
    github: "/",
  },
  {
    date: 2022,
    title: "Sokoban",
    description: "A web-based Sokoban implementation.",
    article: "/",
    github: "/",
  },
  {
    date: 2022,
    title: "New Moon",
    description: "The optimized dark theme for web development.",
    article: "/",
    github: "/",
  },
  {
    date: 2022,
    title: "Snek",
    description: "A terminal-based Snake implementation.",
    article: "/gym-lp",
    github: "https://github.com/gabrielmlinassi/gym-lp",
  },
];

export const Projects = () => {
  return (
    <section className="container pt-8 md:pt-14">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text from-[#fb7185] to-[#a78bfa] bg-gradient-to-r inline-block">
        Projects
      </h2>
      <ol className="grid md:grid-cols-3 gap-4 mt-10">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ol>
    </section>
  );
};
