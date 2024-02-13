"use client";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Product } from "@/payload-types";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Subscription() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Products fetch failed");
        }
        const data = await response.json();
        setProducts(data.docs); // Update this line
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProducts();
  }, []);

  const { mutate: createCheckoutSession, isLoading } =
    trpc.payment.createSession.useMutation({
      onSuccess: ({ url }) => {
        if (url) router.push(url);
      },
    });

  const handleBuyPlan = async (productId: string) => {
    const response = await fetch("/pre-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    if (response.ok) {
      // User is authenticated, proceed with creating a checkout session
      createCheckoutSession({ productIds: [productId] });
    } else {
      const data = await response.json();
      if (data.redirectUrl) {
        // Redirect to the sign-in page
        router.push(data.redirectUrl);
      }
    }
  };

  const productIds = products.map((product) => product.id);

  return (
    <MaxWidthWrapper>
      <div className=" lg:py-24 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-500">
              Pricing
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose the right plan for&nbsp;you
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
          <div className="mt-10">
            <div className="isolate grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-2 lg:divide-x lg:divide-y-0 xl:-mx-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="shadow-lg rounded-2xl bg-white p-8"
                >
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {product.title}
                  </h3>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-2xl font-bold tracking-tight text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {product.price} per month if paid annually
                  </p>
                  <button
                    onClick={() => handleBuyPlan(product.id)}
                    disabled={isLoading}
                    aria-describedby={product.id}
                    className="mt-10 block rounded-md bg-red-500 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
                    ) : null}
                    Buy plan
                  </button>
                  <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                    {product.description}
                  </p>
                  <ul
                    role="list"
                    className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    {product.features?.map((featureObject) => (
                      <li key={featureObject.id} className="flex gap-x-3">
                        <CheckCircleIcon
                          className="h-6 w-5 flex-none text-red-500"
                          aria-hidden="true"
                        />
                        {featureObject.feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
