import { LinkedinLink } from "../social/LinkedinLink";
import { GithubLink } from "../social/GithubLink";
import { XLink } from "../social/XLink";

export const Footer = () => {
  return (
    <div className="dark:border-t border-[hsl(220,43%,15%)] mt-[80px]">
      <div className="flex items-center container mt-10 justify-between">
        <p className="text-center text-sm dark:text-gray-300">Made by Gabriel © 2024</p>
        <div className="flex items-center gap-2 justify-center">
          <XLink />
          <LinkedinLink />
          <GithubLink />
        </div>
      </div>
    </div>
  );
};
