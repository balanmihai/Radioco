"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Blog as BlogType } from "../../payload-types"

function Blog() {
  const [blogs, setBlogs] = useState<BlogType[]>([])

  useEffect(() => {
    fetch("/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data.docs))
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* {blogs.map((blog) => (
        <Link href={`/blog/${blog.slug}`} key={blog.id}>
          <Image
            src={`/${blog.thumbnail.filename}`} // change this line
            alt={blog.title}
            width={300}
            height={200}
            className="w-full h-32 object-cover rounded-full"
          />
          <h2 className="mt-2 text-center text-lg font-semibold group-hover:text-blue-600">
            {blog.title}
          </h2>
        </Link>
      ))} */}
    </div>
  )


}

export default Blog
