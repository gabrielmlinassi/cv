import NextImage from "next/image";

export const CodeIcon = () => {
  return (
    <NextImage
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAXlJREFUWEdjZBjkgHGQu48Bw4FcXFz/B9LR3759Q3HT0HEgesh9DQ1CCUju1evA/K9brFDFfY6B+d8OOKOIcznsBfPPnz+PIn7/9n28ERQUBrEXFpLwEBxyDhzIdEhUCA5aB5qZmWF124cPH6jq5i9fvqCY9+3bNzAfZg/ONDjqQGi4Df8Q3D/VEmuaM4zeTpW0SHEIDnoHwoKJ2rkXZi7FIThkHEgoqg+5e2JNk3Y78adVqoXgoHUgvdIeLPhJrkmGjAOTFiZRpdyDGTIpeBJW88gOwUHvQKoGHwMDA3ruHf5pEOZDq8bDVA3MXcWGsL4HirlEtwfRc/GgdyClwUco7aFXrQRb1NQuB2nuwPNLsde5sPYhrjoZFjJGa1dj7YOgxwzZaXDQO5DcNIir1YLLPLJDcNA7kNhi5li9LdgvbkuWkeSnJW4upPWLyS0HB8yBJAUHljoX1lohZA7d0iCpmYNgQQ1TMDrCSiCOCQ4BE0oj9JYf9KP8AAwOCkcMzeo6AAAAAElFTkSuQmCC"
      alt="Code icon"
      className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
      width={20}
      height={20}
    />
  );
};
