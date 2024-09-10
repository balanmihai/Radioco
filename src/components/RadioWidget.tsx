"use client";

import React, { useEffect, useState } from "react";
import AudioButton from "./AudioButton";
import Image from "next/image";
import Logo from "./../media/logo.png";

interface RootObject {
  status: string;
  source: Source;
  collaborators: Collaborator[];
  relays: Relay[];
  current_track: Currenttrack;
  history: History[];
  logo_url: string;
  streaming_hostname: string;
  outputs: Output[];
}
interface Output {
  name: string;
  format: string;
  bitrate: number;
}
interface History {
  title: string;
}
interface Currenttrack {
  title: string;
  start_time: string;
  artwork_url: string;
  artwork_url_large: string;
}
interface Source {
  type: string;
  collaborator: Collaborator;
  relay: Relay;
}
interface Relay {
  id: number;
  url: string;
  status: string;
}
interface Collaborator {
  id: string;
  name: string;
  status: string;
}

const RadioWidget = () => {
  const [data, setData] = useState<RootObject>();
  const [isLoading, setLoading] = useState(true);
  const url = "https://public.radio.co/stations/sb6e6793c6/status";
  const streamUrl = "https://s4.radio.co/sb6e6793c6/listen";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative shadow-md bg-white rounded-xl p-6 w-auto h-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-md flex items-center font-bold tracking-tight text-gray-900 sm:text-md">
          <div className="w-4 h-4 rounded-xl bg-red-500 mr-2"></div> Live now:
        </h1>

        {isLoading && data ? (
          <>loading</>
        ) : (
          <div className="text-md text-green-500 font-bold">{data?.status}</div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Image
            className="w-16 h-16 rounded-xl mr-2"
            src={data?.current_track.artwork_url || Logo}
            alt="Radio Romania"
            width={64}
            height={64}
          />
          <div>
            <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-md pr-1">
              {data?.current_track.title}
            </h2>
          </div>
        </div>

        <AudioButton url={streamUrl} />
      </div>
    </div>
  );
};

export default RadioWidget;
