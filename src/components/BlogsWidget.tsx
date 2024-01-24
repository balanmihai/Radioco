import { Carousel } from "flowbite-react";

export default function BlogsWidget() {
  return (
    <div className="h-auto ">
      <div className="shadow-md bg-white sm:rounded-lg px-6 pt-4 pb-6">
        <div className="flex justify-between items-center pb-3">
          <h1 className="text-xl font-bold text-start tracking-tight text-gray-900 sm:text-xl">
            Blogs
          </h1>
          <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <a href="/blog">See all Blogs</a>
            </button>
          </div>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
