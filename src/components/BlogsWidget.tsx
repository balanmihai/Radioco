"use client";
import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Post } from "../payload-types";
import Link from "next/link";

export default function BlogsWidget() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/posts");
      if (response.ok) {
        const data = await response.json();
        setPosts(data.docs || []);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="h-auto">
      <div className="shadow-md bg-white rounded-lg px-6 pt-4 pb-6">
        <div className="flex justify-between items-center pb-3">
          <h1 className="text-xl font-bold text-start tracking-tight text-gray-900 sm:text-xl">
            Blogs
          </h1>
          <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <a href="/posts">See all Blogs</a>
            </button>
          </div>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            {posts.map((post) => {
              let imageUrl =
                post.mainPhoto && typeof post.mainPhoto === "object"
                  ? post.mainPhoto.url
                  : "";
              return (
                imageUrl && (
                  <div
                    key={post.id}
                    className="relative hover:pointer flex justify-center items-center"
                  >
                    <Link href={"/posts/" + post.id}>
                      <Image
                        className="brightness-90 ease-in duration-100 hover:brightness-95"
                        width={600}
                        height={600}
                        priority
                        src={imageUrl}
                        alt={post.title}
                      />
                      <h1 className="absolute text-2xl text-white font-bold bottom-5 left-5">
                        {post.title}
                      </h1>
                    </Link>
                  </div>
                )
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
