import { Badge } from "@/components/Badge";
import {
  TypeScriptIcon,
  JavaScriptIcon,
  ReactIcon,
  CssIcon,
  HtmlIcon,
  NextIcon,
  TailwindIcon,
  JestIcon,
  NodeIcon,
  ExpressIcon,
  StyledComponentsIcon,
  GitIcon,
  RadixIcon,
} from "@/components/icons/skills";
import { Heading } from "@/components/typography/Heading";
import { ExperienceCard } from "./ExperienceCard";
import { Experience } from "@/domain/types";
import { ResumeButton } from "@/components/ResumeButton";
import Image from "next/image";
import { XLink } from "@/components/social/XLink";
import { LinkedinLink } from "@/components/social/LinkedinLink";
import { GithubLink } from "@/components/social/GithubLink";

const experiences: Experience[] = [
  {
    image: { src: "/experiences/suvie.jpeg" },
    company: "Suvie Inc.",
    period: "Jan 2022 - Present",
    role: "Frontend Developer",
    site: "https://suvie.com",
  },
  {
    image: { src: "/experiences/upwork.jpeg" },
    company: "Upwork · Freelance",
    period: "Sep 2018 - Nov 2021",
    role: "Software Developer",
    site: "https://www.upwork.com/freelancers/~01495164d6c7d49539?s=1110580755057594368",
  },
  {
    image: { src: "/experiences/sweetrush.jpeg" },
    company: "SweetRush Inc.",
    period: "Jul 2019 - Sep 2020",
    role: "Frontend Developer",
    site: "https://www.sweetrush.com/",
  },
  {
    image: { src: "/experiences/pbnew.jpeg" },
    company: "PBNew Systems",
    period: "Mai 2017 - Aug 2018",
    role: "Software Developer",
    site: "https://pbnew.com.br/new/index.html",
  },
  {
    image: { src: "/experiences/pbnew.jpeg" },
    company: "PBNew Systems",
    period: "Mar 2016 - Apr 2017",
    role: "Technical Analyst",
    site: "https://pbnew.com.br/new/index.html",
  },
];

export default function Me() {
  return (
    <div className="mt-8 flex flex-col gap-14">
      <section className="container">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text from-[#38bdf8] to-[#4ade80] bg-gradient-to-r inline-block">
          About me
        </h1>
        <div className="flex flex-col gap-6 mt-7 leading-relaxed dark:text-gray-3 text-gray-7">
          <p>
            Hey, I&apos;m Gabriel, a front-end developer with over five (5) years of
            professional experience.
          </p>
          <p>
            I focus on details and I&apos;m passionate about crafting software products
            that look great and are both accessible and easy to maintain.
          </p>
          <p>
            I&apos;m all about diving into challenges improving and expanding my skillset
            and I thrive in globally-remote teams that value people and embrace trust,
            kindness, and inclusion.
          </p>
          <figure>
            <div className="-mx-4 md:-mx-5">
              <Image
                src="/me/rj.jpg"
                priority
                width={850}
                height={300}
                alt="In Rio de Janeiro, Brazil – Nov '23"
                className="md:rounded-lg"
              />
            </div>
            <figcaption className="mt-2 text-sm text-center">
              In Rio de Janeiro, Brazil – Nov &apos;23
            </figcaption>
          </figure>
          <p>
            I&apos;m a huge advocate for open source and collaborating with the community.
            You can find my stash of websites, libraries, and apps on GitHub which have
            earned over 2K stars.
          </p>
          <p>
            I&apos;m all about diving into challenges improving and expanding my skillset
            and I thrive in globally-remote teams that value people and embrace trust,
            kindness, and inclusion.
          </p>
          <section className="flex flex-col gap-2.5">
            <h2 className="font-bold text-base">Let&apos;s connect!</h2>
            <p>
              Feel free to contact me by email at{" "}
              <a
                href="mailto:hello@taniarascia.com"
                className="hover:underline underline-offset-2"
              >
                gabrielm.linassi@gmail.com
              </a>{" "}
              to say hi!
            </p>
            <div className="flex gap-2 items-center">
              <XLink />
              <LinkedinLink />
              <GithubLink />
            </div>
          </section>
        </div>
      </section>
      <section className="container mt-8 flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text from-[#38bdf8] to-[#4ade80] bg-gradient-to-r inline-block">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          <Badge Icon={TypeScriptIcon}>TypeScript</Badge>
          <Badge Icon={JavaScriptIcon}>JavaScript</Badge>
          <Badge Icon={JestIcon}>Jest</Badge>
          <Badge Icon={ReactIcon}>React</Badge>
          <Badge Icon={NextIcon}>Next.js</Badge>
          <Badge Icon={RadixIcon}>RadixUI</Badge>
          <Badge Icon={StyledComponentsIcon}>Styled Components</Badge>
          <Badge Icon={TailwindIcon}>Tailwind CSS</Badge>
          <Badge Icon={HtmlIcon}>HTML5</Badge>
          <Badge Icon={CssIcon}>CSS3</Badge>
          <Badge Icon={NodeIcon}>Node.js</Badge>
          <Badge Icon={ExpressIcon}>Express</Badge>
          <Badge Icon={GitIcon}>Git</Badge>
        </div>
      </section>
      <section className="container mt-8">
        <div className="flex items-center justify-between">
          <Heading level="h2">Experience</Heading>
          <ResumeButton />
        </div>
        <ol>
          {experiences.map((experience, key) => (
            <li key={key} className="group">
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
