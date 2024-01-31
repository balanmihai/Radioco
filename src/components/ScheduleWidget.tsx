"use client";

import React, { Key, useEffect, useState } from "react";
import moment from "moment";

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
    const interval = setInterval(() => {
      var time = moment().format(" hh:mm A");
      setCurrentTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    var date = moment().format("yyyy-MM-DD");
    setCurrentDate(date);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="shadow-md bg-white rounded-xl p-6 w-auto h-auto">
      <div className="flex-row pb-2 flex items-center justify-between">
        <div className="text-lg font-bold text-start tracking-tight text-gray-900 sm:text-xl">
          Schedule
        </div>
        <div className="text-md font-semibold text-start tracking-tight text-gray-900">
          {currentTime}
        </div>
      </div>

      <div className="h-96 overflow-y-scroll no-scrollbar">
        {isLoading ? (
          <>loading</>
        ) : (
          data?.data.map((data) => (
            <>
              {data.end &&
              new Date(data.end.slice(0, -15)) >= new Date(currentDate) ? (
                <div
                  key={data.playlist?.id}
                  className="flex flex-row justify-between py-4 items-center"
                >
                  <div className="flex-col">
                    <div className=" text-md font-semibold text-gray-900  shrink-0">
                      {moment(data.end?.slice(0, -15)).format("dddd")}
                    </div>
                    <div className=" text-md font-normal text-gray-500  dark:text-gray-400 shrink-0">
                      {data.start?.slice(11, -9)} - {data.end?.slice(11, -9)}
                    </div>
                  </div>

                  <div className="text-md font-semibold text-right pr-2 text-gray-900 w-36">
                    {data.playlist?.title}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default ScheduleWidget;
