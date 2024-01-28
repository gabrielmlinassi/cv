import { Experience } from "@/domain/types";
import Image from "next/image";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="flex items-start gap-4 hover:cursor-pointer dark:hover:bg-gray-9 hover:bg-gray-1 p-3 -mx-3 duration-100 rounded-lg">
      <div className="mt-[6px] relative">
        <Image
          src={experience.image.src}
          width={48}
          height={48}
          alt={experience.company}
          className="rounded-lg"
        />
        <div className="before:content-[''] group-last-of-type:hidden before:absolute before:w-[2px] before:h-full before:bg-divider before:left-1/2"></div>
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
  );
};
