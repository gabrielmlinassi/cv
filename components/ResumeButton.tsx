"use client";

import { Button } from "./Button";
import { Notepad2Icon } from "./icons/Notep2adIcon";

const CVLink = `https://drive.google.com/file/d/1TUPGu-IvCC2yYQLDIskvNJUM0bWMCNOW/view?usp=sharing`;

export const ResumeButton = () => {
  return (
    <Button asChild className="dark:bg-red-500">
      <a href={CVLink} target="_blank">
        <Notepad2Icon /> Resume
      </a>
    </Button>
  );
};
