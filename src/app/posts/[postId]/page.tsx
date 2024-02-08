"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import { Post as PostType } from "../../../payload-types"; // Import the Post type

interface PostPageProps {
  params: {
    postId: string;
  };
}

const PostPage = ({ params }: PostPageProps) => {
  const { postId } = params;
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" px-4 sm:px-8 lg:px-12">
      <div className="mx-auto shadow-md rounded-xl max-w-3xl min-h-screen bg-white m-10 p-10">
        <article>
          <header className="flex flex-col">
            <a
              href="/posts"
              aria-label="Go back to articles"
              className=" flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
              >
                <path
                  d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <time className="mt-6 flex items-center text-base text-zinc-400 ">
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 "></span>
              <span className="ml-3">
                {moment(post.updatedAt).format(" DD MMMM yyyy, dddd")}
              </span>
            </time>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              {post.title}
            </h1>
          </header>

          <div className="mt-8">
            <div>{post.subtext}</div>

            {/* {post.mainPhoto &&
              typeof post.mainPhoto === "object" &&
              post.mainPhoto.url && (
                <Image
                  src={post.mainPhoto.url}
                  alt={post.title}
                  width={600}
                  height={400}
                />
              )} */}
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostPage;
