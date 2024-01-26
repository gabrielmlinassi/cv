"use client";

import { usePathname } from "next/navigation";
import { SaveIcon } from "@/components/icons/SaveIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { NotepadIcon } from "@/components/icons/NotepadIcon";
import { CodeIcon } from "@/components/icons/CodeIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { useTheme } from "@/hooks/useTheme";
import { HeaderItem } from "./HeaderItem";
import { GithubIcon } from "../icons/GithubIcon";

export const Header = () => {
  const path = usePathname();
  const { toggleTheme } = useTheme();

  return (
    <header className="container sticky md:relative bg-white dark:bg-primary top-0 md:py-8 h-[60px] flex items-center md:h-full border-b md:border-none">
      <nav className="flex gap-1 md:gap-2 w-full">
        <HeaderItem href="/" active={path === "/"}>
          <SaveIcon /> Home
        </HeaderItem>
        <HeaderItem href="/me" active={path === "/about"}>
          <SearchIcon /> About
        </HeaderItem>
        <HeaderItem href="/blog" active={path === "/blog"}>
          <NotepadIcon /> Blog
        </HeaderItem>
        <HeaderItem href="/projects" active={path === "/projects"}>
          <CodeIcon /> Projects
        </HeaderItem>
        <HeaderItem href="https://github.com/gabrielmlinassi" target="_blank" hiddenSm>
          <GithubIcon /> Github
        </HeaderItem>
        <HeaderItem align="end" rounded contrast onClick={toggleTheme}>
          <MoonIcon />
        </HeaderItem>
      </nav>
    </header>
  );
};
