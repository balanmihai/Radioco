import MaxWidthWrapper from "./MaxWidthWrapper";

const navigation = {
  main: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Subscription", href: "#" },
  ],
};

export default function Footer() {
  return (
    <div className="bg-white w-full">
      <MaxWidthWrapper>
        <footer className="bg-white" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl pb-2 pt-2">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div>
                <h3 className="text-md font-bold leading-6 text-gray-900">
                  România Online
                </h3>
                <p className="text-sm text-gray-600">
                  Copyright {new Date().getFullYear()} &copy;
                </p>
              </div>

              <nav
                className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                aria-label="Footer"
              >
                {navigation.main.map((item) => (
                  <div key={item.name} className="pb-6">
                    <a
                      href={item.href}
                      className="text-md leading-6 font-semibold underline text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </nav>

              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  hello@radionline.com
                </button>
              </div>
            </div>
          </div>
        </footer>
      </MaxWidthWrapper>
    </div>
  );
}
