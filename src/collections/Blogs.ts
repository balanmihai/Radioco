import { Access, CollectionConfig } from "payload/types"
import { User } from "../payload-types"

const isAdmin: Access = async ({ req }) => {
  const user = req.user as User | undefined
  return user?.role === "admin"
}

export const Blogs: CollectionConfig = {
  slug: "blogs",
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      label: "Thumbnail",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
      required: true,
    },
  ],
}
