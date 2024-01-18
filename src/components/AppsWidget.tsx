import appleStore from "../media/appstore.png";
import googleStore from "../media/googlestore.png";

const AppsWidget = () => {
  return (
    <div className="flex">
      <div className="flex shadow-md bg-white sm:rounded-lg p-6 h-auto w-full justify-between">
        <div>
          <h1 className="text-xl font-bold text-start tracking-tight text-gray-900 sm:text-xl">
            Listen Everywhere
          </h1>
          <p className="text-start mt-1 text-sm text-gray-500 w-80">
            Connect with all your devices like Alexa, Google Home or your car.
          </p>
        </div>
        <div>
          <img className="h-8 mb-2" src={appleStore.src} alt="" />
          <img className="h-8" src={googleStore.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppsWidget;
