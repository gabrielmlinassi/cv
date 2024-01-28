import { Project } from "@/domain/types";
import Link from "next/link";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const project = tv({
  slots: {
    link: "dark:bg-[#252525] p-2 rounded-lg leading-none border dark:border-gray-7 dark:hover:border-gray-6 border-gray-3 hover:border-gray-4",
  },
});

const ProjectCardLink = ({ href, children }: { href: string; children: ReactNode }) => {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" className={project().link()}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={project().link()}>
      {children}
    </Link>
  );
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border bg-gray-0 dark:bg-[#1f1f1f] p-6 rounded-lg border-gray-3 dark:border-[#2c2c2c]">
      <time className="text-gray-5 dark:text-[#5eddac] text-sm font-mono">
        {project.date}
      </time>
      <a
        href="/"
        target="_blank"
        className="hover:underline block underline-offset-2 decoration-2 font-medium text-gray-9 dark:text-white"
      >
        {project.title}
      </a>
      <p className="font-normal mt-1 mb-4 text-sm text-gray-6 dark:text-gray-5">
        {project.description}
      </p>
      <div className="space-x-1 text-sm font-normal">
        <ProjectCardLink href={project.article}>Article</ProjectCardLink>
        <ProjectCardLink href={project.github}>Demo</ProjectCardLink>
      </div>
    </div>
  );
};
