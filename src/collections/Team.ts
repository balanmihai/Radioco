import { Access, CollectionConfig } from "payload/types"
import { User } from "../payload-types"

const isAdmin: Access = async ({ req }) => {
  const user = req.user as User | undefined
  return user?.role === "admin"
}

export const Team: CollectionConfig = {
  slug: "team",
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "position",
      type: "textarea",
      required: true,
    },
    {
      name: "mainPhoto",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
}
