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
import { Button } from "@/components/Button";
import { ResumeButton } from "@/components/ResumeButton";

const experiences: Experience[] = [
  {
    image: { src: "/experiences/suvie.jpeg" },
    company: "Suvie Inc.",
    period: "Sep 2016 - Nov 2018",
    role: "Software Developer",
  },
  {
    image: { src: "/experiences/upwork.jpeg" },
    company: "Upwork · Freelance",
    period: "Sep 2016 - Nov 2018",
    role: "Software Developer",
  },
  {
    image: { src: "/experiences/sweetrush.jpeg" },
    company: "SweetRush Inc.",
    period: "Sep 2016 - Nov 2018",
    role: "Software Developer",
  },
  {
    image: { src: "/experiences/pbnew.jpeg" },
    company: "PBNew Systems LLC",
    period: "Sep 2016 - Nov 2018",
    role: "Technical Analyst",
  },
];

export default function Me() {
  return (
    <div className="mt-8">
      <section className="container">
        <Heading level="h1">About me</Heading>
        <div className="space-y-6 mt-7 text-base md:text-lg leading-relaxed dark:text-gray-3 text-gray-7">
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
          <p>
            Feel free to contact me by email at{" "}
            <a
              href="mailto:hello@taniarascia.com"
              className="hover:underline underline-offset-2"
            >
              hello@taniarascia.com
            </a>{" "}
            to say hi!
          </p>
          <ol className="list-disc ml-4 text-gray-6 space-y-2">
            {[
              { title: "Newsletter", href: "/" },
              { title: "GitHub", href: "/" },
              { title: "Twitter", href: "/" },
            ].map(({ title, href }) => (
              <li key={title}>
                <a
                  href={href}
                  className="underline underline-offset-2 decoration-2 dark:text-[#98a0fa] text-[#5a43f1]"
                >
                  {title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="container mt-8">
        <Heading level="h2">Skills</Heading>
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
          {experiences.map((experience) => (
            <li key={experience.company} className="group">
              <a href="/" target="_blank">
                <ExperienceCard experience={experience} />
              </a>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
