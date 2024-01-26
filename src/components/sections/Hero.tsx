export const Hero = () => {
  return (
    <section className="container pt-12">
      <div className="w-full grid md:grid-cols-[4fr,2fr]">
        <div>
          <h1 className="md:text-5xl antialiased text-4xl font-bold">
            Hey, I&apos;m Gabriel
          </h1>
          <p className="my-6 antialiased text-base md:text-xl md:leading-relaxed font-normal dark:text-[#ddd] text-[#2c2c2c]">
            I&apos;m a passionate software developer interested in building great-looking
            and user-friendly software while enhancing my skills along the way. 🌱
          </p>
        </div>
        <div className="md:ml-auto row-start-1 md:row-start-auto">
          {/* <div className="rounded-full relative overflow-hidden border md:w-[200px] w-[150px] h-[150px] md:h-[200px]">
              <Image src={meImg} fill alt="me" className="object-cover" />
            </div> */}
        </div>
      </div>
    </section>
  );
};
