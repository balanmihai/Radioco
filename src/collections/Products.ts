import {
  AfterChangeHook,
  BeforeChangeHook,
} from "payload/dist/collections/config/types"
import { Access, CollectionConfig } from "payload/types"
import { Product, User } from "../payload-types"
import { stripe } from "../lib/stripe"

const addUser: BeforeChangeHook<Product> = async ({ req, data }) => {
  const user = req.user

  return { ...data, user: user.id }
}

const syncUser: AfterChangeHook<Product> = async ({ req, doc }) => {
  const fullUser = await req.payload.findByID({
    collection: "users",
    id: req.user.id,
  })

  if (fullUser && typeof fullUser === "object") {
    const { products } = fullUser

    const allIDs = [
      ...(products?.map((product) =>
        typeof product === "object" ? product.id : product
      ) || []),
    ]

    const createdProductIDs = allIDs.filter(
      (id, index) => allIDs.indexOf(id) === index
    )

    const dataToUpdate = [...createdProductIDs, doc.id]

    await req.payload.update({
      collection: "users",
      id: fullUser.id,
      data: {
        products: dataToUpdate,
      },
    })
  }
}

const isAdminOrHasAccess =
  (): Access =>
  ({ req: { user: _user } }) => {
    const user = _user as User | undefined

    if (!user) return false
    if (user.role === "admin") return true

    const userProductIDs = (user.products || []).reduce<Array<string>>(
      (acc, product) => {
        if (!product) return acc
        if (typeof product === "string") {
          acc.push(product)
        } else {
          acc.push(product.id)
        }

        return acc
      },
      []
    )

    return {
      id: {
        in: userProductIDs,
      },
    }
  }

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    read: isAdminOrHasAccess(),
    update: isAdminOrHasAccess(),
    delete: isAdminOrHasAccess(),
  },
  hooks: {
    afterChange: [syncUser],
    beforeChange: [
      addUser,
      async (args) => {
        if (args.operation === "create") {
          const data = args.data as Product

          const createdProduct = await stripe.products.create({
            name: data.title,
            default_price_data: {
              currency: "USD",
              unit_amount: Math.round(data.price * 100),
            },
          })

          const updated: Product = {
            ...data,
            stripeId: createdProduct.id,
            priceId: createdProduct.default_price as string,
          }

          return updated
        } else if (args.operation === "update") {
          const data = args.data as Product

          const updatedProduct = await stripe.products.update(data.stripeId!, {
            name: data.title,
            default_price: data.priceId!,
          })

          const updated: Product = {
            ...data,
            stripeId: updatedProduct.id,
            priceId: updatedProduct.default_price as string,
          }

          return updated
        }
      },
    ],
  },

  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "price",
      label: "Price in USD",
      type: "number",
      required: true,
    },

    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          type: "text",
          name: "feature",
          required: true,
        },
      ],
    },
    {
      name: "priceId",
      type: "text",
      access: {
        create: () => false,
        read: () => true, // Allow reading this field
        update: () => false,
      },
      admin: {
        hidden: true,
      },
    },
    {
      name: "stripeId",
      type: "text",
      access: {
        create: () => false,
        read: () => true, // Allow reading this field
        update: () => false,
      },
      admin: {
        hidden: true,
      },
    },
  ],
}
