"use client";
import Image from "next/image";
import banner from "../../public/PI  (520 x 276 px) (402 x 340 px) (520 x 276 px) (402 x 340 px) (2).png";
import Link from "next/link";


export default function BannerWidget() {

  return (
    <div className="h-auto">
      <Link href='https://romanian.levenes.co.uk/' target="_blank">
        <Image src={banner} alt="" priority height={276} width={520} className="rounded-lg shadow-md w-full" />
      </Link>
    </div>
  );
}
