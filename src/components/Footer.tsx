import MaxWidthWrapper from "./MaxWidthWrapper";

const navigation = {
  main: [{ name: "Terms and Conditions", href: "terms" }],
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

              {/* <nav
                className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                aria-label="Footer"
              >
                {navigation.main.map((item) => (
                  <div key={item.name} className=" py-6 lg:px-6">
                    <a
                      href={item.href}
                      className="text-md leading-6 font-semibold underline text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </nav> */}

              <div className="mt-4 sm:ml-4 sm:flex-shrink-0">
                <a
                  href="mailto:contact@romaniaonline.net"
                  className="flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  contact@romaniaonline.net
                </a>
              </div>
            </div>
          </div>
        </footer>
      </MaxWidthWrapper>
    </div>
  );
}
