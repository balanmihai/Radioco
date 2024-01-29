import { buildConfig } from "payload/config"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import path from "path"
import dotenv from "dotenv"
import { Users } from "./collections/Users"
import { Posts } from "./collections/Posts"
import { Media } from "./collections/Media"
import { Team } from "./collections/Team"
import { Products } from "./collections/Products"
import { Orders } from "./collections/Orders"

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Media, Posts, Team, Products, Orders],
  routes: {
    admin: "/admin",
  },
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- RadioRomania",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
})
