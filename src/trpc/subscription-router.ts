import { z } from "zod"
import { TRPCError } from "@trpc/server"
import { router, privateProcedure } from "./trpc"
import { getPayloadClient } from "../get-payload"

export const subscriptionRouter = router({
  checkSubscription: privateProcedure.query(async ({ ctx }) => {
    const { user } = ctx
    if (!user) {
      throw new TRPCError({ code: "UNAUTHORIZED" })
    }

    const payload = await getPayloadClient()
    const { totalDocs } = await payload.find({
      collection: "orders",
      where: {
        user: { equals: user.id },
        _isPaid: { equals: true },
      },
    })

    return {
      isSubscribed: totalDocs > 0,
      isAdmin: user.role === "admin",
    }
  }),
})
