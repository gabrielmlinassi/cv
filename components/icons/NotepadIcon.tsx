import NextImage from "next/image";

export const NotepadIcon = () => {
  return (
    <NextImage
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlFJREFUWEfVmT9IQkEcx7XmJ4QRBBItbZGiLc7SVtmQ0GJbRottDRaKRlMQ5BI4SdIgLQk6iAkiRJNiW7VE5WTSoNAiZfi7fuK7ON97vhPu3fJ793535/f3ud/94Wk2MYokSd2eK5VKQQu/3w+Wd73dbptZGnrvmU7DCIwcRiDA6EkUbCwSAxuOhrnUkR6LpCJB4QTi1JZLZQguuB8E6131gs1kM2Dj5/Ghfrq9Ur32UIPxaJL/CBpGYKvVgohqVRIZlumZ6WGLjulLX6VluYwNHXYH+R2tBA0n0OEkkbJKvV4f6rfb7eDPHSfBSo1vsO6zbVk/1TlIExRW4EgJN9DJarXKhggGya6w2SVEX9/fwG5dH4HVTFB4gfQqVit4L+CEps8vU2CRXKVSgbrL5SLEso9gE0+50QgKL1AtMVzFvo056HJ/d0u6fnrArO+uycjF4+QkwtLpdEYjKLxAtVOMOUeTy19OQIxLCxawizukjiV0EIJHvC1pXsXCC1SaYvcyIaJEbna+De3cgR+wF4kq2GKhqI+g8AJZU6w252hym75TiNmzQla3boLCC6SnWG/O4X2y2WjyISi8QJxivTlHB8o9B4UVaLGQE6D1cUMg/J2t9AnB2ucw52w2mwwizozuVWwcgaUvIJAvwCeb/tnK2ueUNnhuOdgnKLpAJPKUnIRHVs4pkeO+DyJBwwikCeE3HHzPWrXox5s3t5OEJiiMQPzsppRTvPyab9TCChwgQjY8qkiSxAuabBzNX1hNJpPwAsdCSuugQ/8C0DrYONr/AqWg4EdKn+XrAAAAAElFTkSuQmCC"
      alt="Notepad icon"
      className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
      width={20}
      height={20}
    />
  );
};
