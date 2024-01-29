"use client"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { trpc } from "@/trpc/client"
import { useRouter } from "next/navigation"
import { CheckCircleIcon } from "@heroicons/react/20/solid"
import { Product } from "@/payload-types"

export default function Subscription() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])

  // console.log("Products:", products)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products")
        if (!response.ok) {
          throw new Error("Products fetch failed")
        }
        const data = await response.json()
        setProducts(data.docs) // Update this line
      } catch (error) {
        console.error("Fetch error:", error)
      }
    }

    fetchProducts()
  }, [])

  const { mutate: createCheckoutSession, isLoading } =
    trpc.payment.createSession.useMutation({
      onSuccess: ({ url }) => {
        if (url) router.push(url)
      },
    })

    const productIds = products.map((product) => product.id)

  // console.log('Received productIds:', productIds);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-2 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {products.map((product) => (
              <div key={product.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
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
                  onClick={() => {
                    createCheckoutSession({ productIds })
                  }}
                  disabled={isLoading}
                  aria-describedby={product.id}
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                        className="h-6 w-5 flex-none text-indigo-600"
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
  )
}
