"use client";

import { usePathname } from "next/navigation";
import { HeaderItem } from "./HeaderItem";
import { ThemeSwitch } from "../ThemeSwitch";
import { MenuIcon } from "../icons/MenuIcon";
import { useCallback, useState } from "react";
import { cn } from "@/lib";
import Link from "next/link";
import { XLink } from "../social/XLink";
import { LinkedinLink } from "../social/LinkedinLink";
import { GithubLink } from "../social/GithubLink";

const useToggle = () => {
  const [toggled, setToggle] = useState(false);

  const toggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return [toggled, toggle] as const;
};

export const Header = () => {
  const path = usePathname();
  const [isMenuOpen, toggleMenu] = useToggle();

  return (
    <header
      className={cn(
        "p-3 fixed top-0 left-0 right-0 bg-clip-padding backdrop-filter backdrop-blur-xl md:backdrop-blur-md z-10",
        isMenuOpen && "bottom-0",
      )}
      data-expanded={isMenuOpen}
    >
      <nav className="grid grid-rows-[auto,1fr] h-full md:grid-rows-1 grid-cols-[auto,1fr] md:grid-cols-[auto,1fr,auto] gap-1 md:gap-2 container dark:bg-nav-bg border dark:border-white/10 p-2 rounded-xl md:rounded-2xl">
        <Link href="/" className="md:px-3 px-2 py-3 md:py-2 text-sm md:text-base">
          <span className="font-bold bg-gradient-to-r from-[#6680bd] to-[#23b7f6] text-transparent bg-clip-text">
            Gabriel Marmitt
          </span>
        </Link>

        <ol className="[[data-expanded=true]_&]:flex [[data-expanded=true]_&]:row-start-2 [[data-expanded=true]_&]:col-span-2 [[data-expanded=true]_&]:items-start hidden md:flex gap-4 md:gap-2 md:flex-row flex-col md:justify-end justify-center">
          <HeaderItem href="/me" active={path === "/me"} color="gradient1">
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#38bdf8] group-hover:to-[#4ade80]">
              About
            </span>
          </HeaderItem>
          <HeaderItem href="/blog" active={path === "/blog"}>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#facc15] group-hover:to-[#fb923c]">
              Blog
            </span>
          </HeaderItem>
          <HeaderItem href="/projects" active={path === "/projects"}>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fb7185] group-hover:to-[#a78bfa]">
              Projects
            </span>
          </HeaderItem>
          <li className="flex gap-2 px-7">
            <XLink unstyled />
            <LinkedinLink />
            <GithubLink />
          </li>
        </ol>

        <ul className="flex items-center justify-end">
          <ThemeSwitch className="dark:text-[#88a4e6] md:px-3 px-2 py-2 duration-150 font-bold flex items-center md:gap-2 gap-1 text-sm md:text-base md:rounded-lg group" />
          <button
            className="dark:text-[#88a4e6] md:hidden duration-150 font-bold flex items-center gap-1 text-sm"
            onClick={toggleMenu}
          >
            <MenuIcon className="dark:text-[#88a4e6] p-2" />
          </button>
        </ul>
      </nav>
    </header>
  );
};
