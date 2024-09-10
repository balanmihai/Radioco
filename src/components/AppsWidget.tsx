import Image from "next/image";
import appleStore from "../media/appstore.png";
import googleStore from "../media/googlestore.png";
import Link from "next/link";

const AppsWidget = () => {
  return (
    <div className=" shadow-md bg-white rounded-xl p-6 w-full justify-between lg:flex">
      <div>
        <h1 className="text-xl font-bold text-start tracking-tight text-gray-900 sm:text-xl">
          Listen Everywhere
        </h1>
        <p className="text-start mt-1 text-sm text-gray-500 w-80">
          Connect with all your devices like Alexa, Google Home or your car.
        </p>
      </div>
      <div className="flex items-center justify-between pt-3 lg:flex-col">
        <Link href="https://www.example.com/">
          <Image
            width={150}
            height={100}
            className="mb-2"
            src={appleStore}
            alt=""
          />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.bala.url.radioromaniaonline&hl=en-US&ah=e41NsO8ClIr0WT1OPIck4-D3w5s">
          <Image
            width={150}
            height={100}
            className="mb-2"
            src={googleStore}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default AppsWidget;
