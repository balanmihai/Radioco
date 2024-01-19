const ScheduleWidget = () => {
  return (
    <div className="flex">
      <div className=" shadow-md bg-white sm:rounded-lg p-6 w-full h-auto">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-start tracking-tight text-gray-900 sm:text-xl">
            Schedule
          </h1>
          <p>19:03 GMT</p>
        </div>

        <div className=" p-8">
          <div className="">
            <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-md font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  08:00 - 09:00
                </p>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    Opening remarks
                  </a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-md font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  08:00 - 09:00
                </p>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    Opening remarks
                  </a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 text-md font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  08:00 - 09:00
                </p>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    Opening remarks
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleWidget;
