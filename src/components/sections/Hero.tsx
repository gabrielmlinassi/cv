import { Heading } from "../typography/Heading";

export const Hero = () => {
  return (
    <section className="container pt-8 md:pt-[100px] md:pb-12">
      <div className="w-full grid md:grid-cols-[4fr,2fr]">
        <div>
          <Heading level="h1">Hey, I&apos;m Gabriel</Heading>
          <p className="mt-6 text-base md:text-xl md:leading-normal font-medium dark:text-[#ddd] text-[#2c2c2c]">
            I&apos;m a passionate software developer interested in building great-looking
            and user-friendly software while enhancing my skills along the way.
          </p>
        </div>
      </div>
    </section>
  );
};
