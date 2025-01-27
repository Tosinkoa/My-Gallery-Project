import Link from "next/link";
import Image from "next/image";
import Parallax from "./Parallax";

export default function MyImages({ id, src, alt, width, height }) {
  return (
    <Parallax>
      <div className="border-2 rounded-lg focus:scale-110 hover:scale-110 sm:focus:hover:scale-100 transition-all duration-150 shadow-md hover:shadow-2xl p-2">
        <div className="relative justify-center mx-auto">
          <div className="m-3 h-52 w-52">
            <Image className="rounded-md " src={src} alt={alt} objectFit="cover" width={100} layout="fill" height={100} />
          </div>
        </div>
        <div className="flex justify-between items-center my-2 border-t-2 mx-3 pt-2">
          <p className="imagetitle">{alt.split(",")[0]}</p>
          <Link href="/[id]" as={`${id}`}>
            <p className="bg-red-500 hover:bg-red-400 active:border-gray-500  active:border  w-fit font-bold text-gray-50 rounded-md px-4 cursor-pointer">
              View
            </p>
          </Link>
        </div>
      </div>
    </Parallax>
  );
}
