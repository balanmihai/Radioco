"use client";

import React, { Key, useEffect, useState } from "react";

type ScheduleData = {
  data: [
    {
      start?: string;
      end?: string;
      playlist?: {
        id: Key | null | undefined;
        name: string;
        colour: string;
        artist: string;
        title: string;
        artwork: string;
      };
    }
  ];
};

const ScheduleWidget = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ScheduleData>();
  const url = "https://public.radio.co/stations/s1cdb8ef73/embed/schedule";

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="shadow-md bg-white rounded-xl p-6 w-auto h-auto">
      <div className="flex-row pb-2 flex items-center justify-between">
        <div className="text-lg font-bold text-start tracking-tight text-gray-900 sm:text-xl">
          Schedule
        </div>
        <div>19:03 GMT</div>
      </div>

      <div className="h-96 overflow-y-scroll no-scrollbar">
        {isLoading ? (
          <>loading</>
        ) : (
          data?.data.map((data) => (
            <div
              key={data.playlist?.id}
              className="flex flex-row justify-between py-4 items-center"
            >
              <div className=" text-md font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                {data.start?.slice(11, -9)} - {data.end?.slice(11, -9)}
              </div>

              <div className="text-md font-semibold text-right pr-2 text-gray-900 w-36">
                {data.playlist?.title}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ScheduleWidget;
