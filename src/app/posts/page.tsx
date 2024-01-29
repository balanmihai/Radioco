"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { useEffect, useState } from "react"
import { Post } from "../../payload-types"
import Image from "next/image"
import Link from "next/link"

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([])

  // Fetch posts from PayloadCMS
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts")
        if (response.ok) {
          const data = await response.json()
          console.log("Fetched posts:", data) // Log the fetched posts
          setPosts(data.docs || [])
        } else {
          console.error("Failed to fetch posts:", response.statusText)
          setPosts([])
        }
      } catch (error) {
        console.error("Error fetching posts:", error)
        setPosts([])
      }
    }

    fetchPosts()
  }, [])

  return (
    <MaxWidthWrapper>
      <div className="bg-gray-100 py-12 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Blogs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Array.isArray(posts) &&
              posts.map((post) => {
                let imageUrl = ""
                if (typeof post.mainPhoto === "object" && post.mainPhoto.url) {
                  imageUrl = post.mainPhoto.url
                }

                return (
                  <Link key={post.id} href={`/posts/${post.id}`}>
                    <article
                      key={post.id}
                      className="relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-lg bg-gray-900"
                    >
                      {imageUrl && (
                        <div className="relative h-80 w-full">
                          <Image
                            src={imageUrl}
                            alt={post.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-2xl"
                          />
                        </div>
                      )}
                      <div className="p-8">
                        <h3 className="text-lg font-semibold leading-6 text-white">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-gray-300">{post.subtext}</p>
                      </div>
                    </article>
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
