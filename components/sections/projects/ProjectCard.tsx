import { Project } from "@/domain/types";
import Link from "next/link";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const project = tv({
  slots: {
    link: "p-2 rounded-lg leading-none border dark:border-gray-700 dark:hover:border-gray-6 border-gray-3 hover:border-gray-4",
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
    <div className="border flex flex-col gap-1 bg-gray-0 dark:bg-gray-50/5 p-6 rounded-lg border-gray-3 dark:border-[#2c2c2c]">
      <time className="text-[#25b17b] dark:text-[#5eddac] text-sm font-mono">
        {project.date}
      </time>
      <a
        href="/"
        target="_blank"
        className="hover:underline block underline-offset-2 decoration-2 font-medium text-gray-9 dark:text-white"
      >
        {project.title}
      </a>
      <p className="font-normal text-sm text-gray-6 dark:text-gray-3">
        {project.description}
      </p>
      <div className="flex gap-2 mt-2 text-sm font-normal">
        <ProjectCardLink href={project.article}>Article</ProjectCardLink>
        <ProjectCardLink href={project.github}>Demo</ProjectCardLink>
      </div>
    </div>
  );
};
