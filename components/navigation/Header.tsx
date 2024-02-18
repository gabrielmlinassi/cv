"use client";

import { usePathname } from "next/navigation";
import { HeaderItem } from "./HeaderItem";
import { ThemeSwitch } from "../ThemeSwitch";
import { MenuIcon } from "../icons/MenuIcon";

export const Header = () => {
  const path = usePathname();

  return (
    <header className="p-3 fixed top-0 left-0 right-0 glass">
      <nav className="grid grid-cols-[auto,1fr] md:grid-cols-[auto,1fr,auto] gap-1 md:gap-2 container dark:bg-nav-bg border dark:border-white/10 p-2 rounded-xl md:rounded-2xl">
        <HeaderItem href="/" active={path === "/"} unstyled>
          <span className="font-bold bg-gradient-to-r from-[#6680bd] to-[#23b7f6] text-transparent bg-clip-text">
            Gabriel Marmitt
          </span>
        </HeaderItem>

        <ol className="md:flex justify-end items-center hidden">
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
        </ol>

        <ul className="flex items-center justify-end">
          <HeaderItem className="dark:text-[#88a4e6]" asChild>
            <ThemeSwitch />
          </HeaderItem>
          <HeaderItem className="dark:text-[#88a4e6] md:hidden" asChild>
            <MenuIcon className="dark:text-[#88a4e6]" />
          </HeaderItem>
        </ul>
      </nav>
    </header>
  );
};
