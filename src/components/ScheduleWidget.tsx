"use client";

import React, { Key, useEffect, useState } from "react";
import moment from "moment";

type ScheduleData = {
  data: [
    {
      start?: string;
      end?: string;
      playlist?: {
        id: React.Key | null | undefined;
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
  const url = "https://public.radio.co/stations/sb6e6793c6/embed/schedule";
  const [currentTime, setCurrentTime] = useState(moment());

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative shadow-md bg-white rounded-xl p-6 w-full max-w-lg h-auto max-h-[70vh] overflow-hidden">
      <div className="flex-row pb-2 flex items-center justify-between">
        <div className="text-md font-bold text-start tracking-tight text-gray-900 sm:text-xl">
          Schedule
        </div>
        <div className="text-md font-semibold text-start tracking-tight text-gray-900">
          {currentTime.format("HH:mm")}
        </div>
      </div>

      <div className="h-auto max-h-[60vh] overflow-y-auto">
        {data?.data
          .filter((item) => moment(item.end).isAfter(currentTime))
          .map((item, index) => {
            const isOngoing = moment(currentTime).isBetween(
              moment(item.start),
              moment(item.end)
            );

            return (
              <div
                key={index}
                className={`flex flex-row justify-between py-4 items-center border-b border-gray-200 last:border-b-0 ${
                  isOngoing ? "bg-yellow-100" : ""
                }`}
              >
                <div className="flex flex-col w-1/2">
                  <div className="text-md font-semibold text-gray-900 truncate">
                    {moment(item.end?.slice(0, -15)).format("dddd")}
                  </div>
                  <div className="text-md font-normal text-gray-500 dark:text-gray-400">
                    {item.start?.slice(11, -9)} - {item.end?.slice(11, -9)}
                  </div>
                </div>

                <div className="text-md font-semibold text-right pr-2 text-gray-900 w-36 truncate">
                  {item.playlist?.title}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ScheduleWidget;
