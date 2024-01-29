"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Post as PostType } from "../../../payload-types" // Import the Post type

interface PostPageProps {
  params: {
    postId: string
  }
}

const PostPage = ({ params }: PostPageProps) => {
  const { postId } = params
  const [post, setPost] = useState<PostType | null>(null)

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data)
      })
  }, [postId])

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.subtext}</p>
      {post.mainPhoto &&
        typeof post.mainPhoto === "object" &&
        post.mainPhoto.url && (
          <Image
            src={post.mainPhoto.url}
            alt={post.title}
            width={600}
            height={400}
          />
        )}
    </div>
  )
}

export default PostPage
