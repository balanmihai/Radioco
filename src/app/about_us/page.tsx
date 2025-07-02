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
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-red-500">
              Despre Noi
            </h2>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Suntem postul de radio online dedicat românilor din Marea
              Britanie!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Iar misiunea noastră este să închegăm și să contribuim la
              dezvoltarea comunității de români, dându-i o voce și un spațiu în
              care să se exprime și să poată fi auzită. Cum ne propunem să facem
              asta? Răspunsul este simplu:
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Prin emisiuni realizate de jurnaliști cu experiență unde vor fi
              dezbătute subiectele care ne apasă cel mai mult în străinătate, și
              nu numai - emisiuni cu sfaturi legale, știri politice nepartizane
              și actualități din toate domeniile sau interviuri cu români care
              au reușit să facă lucruri impresionante aici, în UK, în ciuda
              tuturor dificultăților pe care le întâmpină un străin.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Prin muzică românească și din străinătate, care să ne lumineze
              zilele care sunt mai mereu ploioase.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Prin evenimente și promovări care să ne ajute să auzim unii de
              alții și să ne mențină inima românească și să ne păstreze cultura
              vie, în ciuda faptului că suntem foarte departe de casă.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Toate acestea, și nu numai, ne vor ajuta să creăm cu adevărat o
              Comunitate în Străinătate, unde fiecare român poate să-și exprime
              părerile, întrebările și temerile într-un spațiu sigur, românesc
              și al nostru.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stai la curent cu ultimele știri despre România Online descărcând
              aplicația de pe App Store sau Google Play și urmărindu-ne paginile
              de Instagram și Facebook, link-uri pe care le accesezi prin
              butoanele din dreapta paginii.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Până data viitoare!
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
