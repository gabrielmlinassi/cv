import cn from "classnames";
import { type Skill, Rating } from "data/Skills";

const RatingClasses: { [key in Rating]: string } = {
  excelent: "w-full",
  very_good: "w-5/6",
  intermediate: "w-1/2",
  beginner: "w-1/4",
};

const RatingLabel: { [key in Rating]: string } = {
  excelent: "Excelent",
  very_good: "Very Good",
  intermediate: "Intermediate",
  beginner: "Beginner",
};

const SkillsSection = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="py-4 px-4">
      {skills.map(({ name, rating }, i) => {
        return (
          <div key={i}>
            <span className="text-xs text-white">{name}</span>
            <div className="relative">
              <div className="absolute h-2 w-full bg-blue-400"></div>
              <div
                className={cn(
                  "absolute h-2 w-full bg-white",
                  RatingClasses[rating]
                )}
              ></div>
            </div>
            <span className="mt-3 inline-block w-full text-right text-xs text-white">
              {RatingLabel[rating]}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;
