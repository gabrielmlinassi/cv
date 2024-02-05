import { Experience } from "@/domain/types";
import Image from "next/image";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <a href={experience.site} target="_blank">
      <div className="flex items-start gap-4 hover:cursor-pointer dark:hover:bg-gray-9 hover:bg-[rgba(179,179,190,0.1)] p-3 -mx-3 duration-100 rounded-lg">
        <div className="mt-[6px] relative border dark:border-none rounded-lg">
          <Image
            src={experience.image.src}
            width={48}
            height={48}
            alt={experience.company}
            className="rounded-lg"
          />
          <div className="before:content-[''] group-last-of-type:hidden before:absolute before:w-[1px] before:h-full dark:before:bg-divider before:bg-[#e5e7eb] before:left-1/2"></div>
        </div>
        <div>
          <time className="text-sm font-mono text-[#0c121eb3] dark:text-[#fbfcfeb3]">
            {experience.period}
          </time>
          <p className="dark:text-[#fbfcfe] text-[#0c121e] py-[2px] font-medium group-hover:underline underline-offset-2 decoration-2">
            {experience.company}
          </p>
          <p className="dark:text-[#fbfcfed9] text-[#0c121ed9] text-sm">
            {experience.role}
          </p>
        </div>{" "}
      </div>
    </a>
  );
};
