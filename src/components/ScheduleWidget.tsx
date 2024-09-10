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
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

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
      setCurrentTime(moment().format("hh:mm A"));
      setCurrentDate(moment().format("YYYY-MM-DD"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative shadow-md bg-white rounded-xl p-6 w-auto h-auto">
      <div className="flex-row pb-2 flex items-center justify-between">
        <div className="text-md font-bold text-start tracking-tight text-gray-900 sm:text-xl">
          Schedule
        </div>
        <div className="text-md font-semibold text-start tracking-tight text-gray-900">
          {currentTime}
        </div>
      </div>

      <div className="h-auto lg:h-screen">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.data.map((item, index) => (
            <div
              key={index} // Ensure key is unique
              className="flex flex-row justify-between py-4 items-center"
            >
              <div className="flex-col">
                <div className=" text-md font-semibold text-gray-900  shrink-0">
                  {moment(item.end?.slice(0, -15)).format("dddd")}
                </div>
                <div className=" text-md font-normal text-gray-500  dark:text-gray-400 shrink-0">
                  {item.start?.slice(11, -9)} - {item.end?.slice(11, -9)}
                </div>
              </div>

              <div className="text-md font-semibold text-right pr-2 text-gray-900 w-36">
                {item.playlist?.title}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ScheduleWidget;
