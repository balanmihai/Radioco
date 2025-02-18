"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../app/supabaseClient";

interface ImageData {
  id: string;
  imageUrl: string;
  imageSrc: string;
}

export default function BannerWidget() {
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true); // Set loading true when starting to fetch
      const { data, error } = await supabase
        .from("banners")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error("Fetch Error:", error.message);
        setError(error.message); // Set error message if fetch fails
      } else {
        setImages(data || []); // Set images if fetch is successful
      }
      setLoading(false); // Set loading to false after fetch
    };

    fetchImages();
  }, []);

  return (
    <div className="h-auto">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <p>Loading ad...</p>
        </div>
      ) : error ? (
        <div className="w-full h-full bg-red-600 p-6 rounded-lg flex items-center justify-center text-white">
          <p>Error: {error}</p>
        </div>
      ) : images.length === 0 ? (
        <div className="w-full h-full bg-red-600 p-6 h-full rounded-lg flex items-center justify-center text-white">
        </div>
      ) : (
              <Link href={images[1].imageUrl} target="_blank">
                <Image
                  src={images[1].imageSrc}
                  alt="Banner"
                  priority
                  layout="intrinsic"
                  height={72}
                  width={1056}
                  className="rounded-sm sm:rounded-lg lg:rounded-lg shadow-md w-full h-auto object-cover"
                  onError={() => setError("Failed to load image")}
                />
              </Link>
      )}
    </div>
  );
}
