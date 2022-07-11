export default function Home() {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-4.75xl font-bold sm:text-5xl">Coming Soon 🥔</h1>
      <p className="mt-6 text-center text-lg">
        In the meantime, check out my{" "}
        <a href="https://github.com/gabrielmlinassi" className="text-blue-500">
          GitHub
        </a>
        , my{" "}
        <a href="https://twitter.com/gabrielmlinassi" className="text-blue-500">
          Twitter
        </a>
        , or my{" "}
        <a
          href="https://www.linkedin.com/in/gabrielmlinassi/"
          className="text-blue-500"
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
}
