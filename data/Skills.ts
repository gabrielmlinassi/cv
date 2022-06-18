export type Rating = "excelent" | "very_good" | "intermediate" | "beginner";

export type Skill = { name: string; rating: Rating };

export const SKILLS: Skill[] = [
  {
    name: "React.js / Next.js",
    rating: "excelent",
  },
  {
    name: "Tailwind / CSS-in-JS / CSS",
    rating: "excelent",
  },
  {
    name: "JavaScript / TypeScript",
    rating: "very_good",
  },
  {
    name: "Node.js / Express / Nest.js",
    rating: "intermediate",
  },
  {
    name: "React Native / Python",
    rating: "beginner",
  },
];
