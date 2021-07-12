import Image from "next/image";
import { getPictures } from "./api/pictures";

interface IPicture {
  large: string;
  small: string;
}

interface IGallery {
  pictures: IPicture[];
}

export default function Gallery({ pictures }: IGallery) {
  return (
    <div className="p-10">
      <div className="text-center">
        <h1 className="text-2xl">
          Building incremental image loading on NextJS with Cloudinary
        </h1>
      </div>
      <div className="flex items-center justify-center max-w-full flex-wrap gap-1 mt-8">
        {pictures.map((picture, idx) => (
          <Image
            key={idx}
            src={picture.large}
            placeholder="blur"
            blurDataURL={`data:image/jpeg;base64,${picture.small}`}
            width={800}
            height={600}
            alt="Ruble picture of our Galaxy"
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const pictures = await getPictures("test");

  return {
    props: { pictures },
  };
}
