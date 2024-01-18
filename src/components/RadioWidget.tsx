const RadioWidget = () => {
  return (
    <div className="shadow-md bg-white sm:rounded-lg p-6 w-auto h-auto">
      <div className="flex items-center justify-start mb-2">
        <div className="w-5 h-5 rounded-xl bg-red-500 mr-2"></div>
        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
          Now Playing
        </h1>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="w-12 h-10 rounded-xl bg-gray-500 mr-2"></div>
          <div>
            <h2 className="text-md font-bold text-start tracking-tight text-gray-900 sm:text-md">
              A show about something nice
            </h2>
            <p className="text-start text-sm text-gray-500 w-96">
              With Sam Smith
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 fill-red-500"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default RadioWidget;
