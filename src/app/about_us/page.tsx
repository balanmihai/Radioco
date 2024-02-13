"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Team } from "../../payload-types"; // Import the Team type

export default function About() {
  const [team, setTeam] = useState<Team[]>([]);

  // Fetch team data from PayloadCMS
  useEffect(() => {
    async function fetchTeam() {
      const response = await fetch("/api/team"); // Update the endpoint as necessary
      if (response.ok) {
        const data = await response.json();
        setTeam(data.docs || []);
      }
    }

    fetchTeam();
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="lg:py-24 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-red-500">
              Meet
            </h2>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Our team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.map((member) => {
              let imageUrl =
                member.mainPhoto && typeof member.mainPhoto === "object"
                  ? member.mainPhoto.url
                  : "";
              return (
                <li key={member.id}>
                  {imageUrl && (
                    <Image
                      className="shadow-lg aspect-[3/2] w-full rounded-2xl object-cover"
                      width={200}
                      height={200}
                      src={imageUrl}
                      alt={member.name}
                    />
                  )}
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    {member.position}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
