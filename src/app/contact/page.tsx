import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Contact() {
  return (
    <MaxWidthWrapper>
      <div className="lg:py-24 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-red-500">
                  Contact
                </h2>
                <h2 className=" mt-2 text-3xl font-bold tracking-tight text-gray-900">
                  Hai să ne auzim!
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Dacă ai o întrebare, propunere sau dacă doar vrei să ne
                  comunici ceva, nu ezita să ne trimiți un mesaj prin
                  mail sau telefon.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl shadow-lg bg-white p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Colaborări
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-red-500"
                          href="mailto:vlad.toma@romaniaonline.net"
                          rel="noopener noreferrer" // For security, though often irrelevant for mailto
                        >
                          vlad.toma@romaniaonline.net
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+44 131 618 7000</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl shadow-lg bg-white p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Vânzări
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-red-500"
                          href="mailto:sales@romaniaonline.net
"
                        >
                          sales@romaniaonline.net
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl shadow-lg bg-white p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Emisiuni
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-red-500"
                          href="mailto:emisiuni@romaniaonline.net"
                        >
                          emisiuni@romaniaonline.net
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl shadow-lg bg-white p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Alatură-te Echipei
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-red-500"
                          href="mailto:echipa@romaniaonline.net"
                        >
                          echipa@romaniaonline.net
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
