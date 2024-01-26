import { LinkedinLink } from "../social/LinkedinLink";
import { GithubLink } from "../social/GithubLink";
import { XLink } from "../social/XLink";

export const Footer = () => {
  return (
    <div className="container">
      <div className="flex items-center gap-2 justify-center mt-[80px] border-t pt-6 border-[#2c2c2c]">
        <XLink />
        <LinkedinLink />
        <GithubLink />
      </div>
    </div>
  );
};
