import Image from "next/image"
import appleStore from "../media/appstore.png"
import googleStore from "../media/googlestore.png"

const AppsWidget = () => {
  return (
    <div className="flex shadow-md bg-white rounded-xl p-6 w-full justify-between">
      <div>
        <h1 className="text-xl font-bold text-start tracking-tight text-gray-900 sm:text-xl">
          Listen Everywhere
        </h1>
        <p className="text-start mt-1 text-sm text-gray-500 w-80">
          Connect with all your devices like Alexa, Google Home or your car.
        </p>
      </div>
      <div>
        <Image
          width={130}
          height={100}
          className="cursor-pointer mb-2"
          src={appleStore}
          alt=""
        />
        <Image
          width={130}
          height={100}
          className="cursor-pointer"
          src={googleStore}
          alt=""
        />
      </div>
    </div>
  )
}

export default AppsWidget
