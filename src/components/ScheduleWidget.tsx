"use client"

import React, { Key, useEffect, useState } from "react"
import moment from "moment"
import SubscriptionOverlay from "./SubscriptionOverlay"
import { trpc } from "@/trpc/client"

type ScheduleData = {
  data: [
    {
      start?: string
      end?: string
      playlist?: {
        id: React.Key | null | undefined
        name: string
        colour: string
        artist: string
        title: string
        artwork: string
      }
    }
  ]
}

const ScheduleWidget = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<ScheduleData>()
  const url = "https://public.radio.co/stations/s1cdb8ef73/embed/schedule"
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isCheckingSubscription, setIsCheckingSubscription] = useState(true)
  const [currentTime, setCurrentTime] = useState("")
  const [currentDate, setCurrentDate] = useState("")

  const { data: subscriptionData, isLoading: isSubscriptionLoading } =
    trpc.subscription.checkSubscription.useQuery(undefined, {
      onError: () => {
        setIsSubscribed(false)
        setIsCheckingSubscription(false)
      },
      onSuccess: (data) => {
        setIsSubscribed(data.isSubscribed || data.isAdmin)
        setIsCheckingSubscription(false)
      },
    })

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("hh:mm A"))
      setCurrentDate(moment().format("YYYY-MM-DD"))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (isLoading || isCheckingSubscription) {
    return <div>Loading...</div>
  }

  return (
    <div className="relative shadow-md bg-white rounded-xl p-6 w-auto h-auto">
      {!isSubscribed && <SubscriptionOverlay />}
      <div className="flex-row pb-2 flex items-center justify-between">
        <div className="text-lg font-bold text-start tracking-tight text-gray-900 sm:text-xl">
          Schedule
        </div>
        <div className="text-md font-semibold text-start tracking-tight text-gray-900">
          {currentTime}
        </div>
      </div>

      <div className="h-96 overflow-y-scroll no-scrollbar">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.data.map((item, index) => {
            // Use index to ensure uniqueness if necessary
            const keyId = item.playlist?.id || `schedule-${index}` // Fallback to using index if id is undefined
            return item.end &&
              new Date(item.end.slice(0, -15)) >= new Date(currentDate) ? (
              <div
                key={keyId} // Ensure key is unique
                className="flex flex-row justify-between py-4 items-center"
              >
                <div className="flex-col">
                  <div className=" text-md font-semibold text-gray-900  shrink-0">
                    {moment(item.end?.slice(0, -15)).format("dddd")}
                  </div>
                  <div className=" text-md font-normal text-gray-500  dark:text-gray-400 shrink-0">
                    {item.start?.slice(11, -9)} - {item.end?.slice(11, -9)}
                  </div>
                </div>

                <div className="text-md font-semibold text-right pr-2 text-gray-900 w-36">
                  {item.playlist?.title}
                </div>
              </div>
            ) : null
          })
        )}
      </div>
    </div>
  )
}

export default ScheduleWidget
