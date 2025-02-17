"use client";
import Image from "next/image";
import banner from "../../public/Avocați români în UK (1056 x 72 px) (2).png";
import Link from "next/link";

export default function BannerTop() {

  return (
    <div className="h-auto">
        <Link href='https://romanian.levenes.co.uk/' target="_blank">
          <Image src={banner} alt="" priority height={72} width={1056} className="rounded-lg shadow-md w-full" />
        </Link>
    </div>
  );
}
