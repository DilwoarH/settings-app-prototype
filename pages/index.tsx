import Image from "next/image"
import React from "react"
import { Bell, Menu } from "lucide-react"
import { dashboardConfig } from "@/config/dashboard"
import Link from "next/link"
import * as cookie from "cookie"
import AppLayout from "@/components/layout/app-layout"
import UserGreet from "@/components/user-greet/user-greet"
import { GetServerSideProps } from "next"
import { getUser } from "@/services/AuthService"
import { STAFFS } from "@/gql/queries/staffs"
import { client } from "@/services/ApolloClient"

const imageMapping: Record<string, string> = {
  behaviour: "profile-tick.png",
  strategies: "format-circle.png",
  coaching: "messages-3.png",
  appraisal: "task-square.png",
  users: "people.png",
  "site-setting": "global.png",
}

function Homepage({ user, staff }: any) {
  const getImageUrl = (icon: string) => {
    const imageName = imageMapping[icon]
    return `/images/${imageName}`
  }
  return (
    <AppLayout title="Home">
      <div className="mb-4 flex items-center justify-between py-6">
        <UserGreet staff={staff} />
        <div className="flex items-center space-x-2">
          <div className="h-11 w-11 border rounded-full flex items-center justify-center relative cursor-pointer hover:bg-slate-200">
            <Bell />
            <small className="absolute bg-red-500 w-4 h-4 flex items-center justify-center rounded-full top-1 right-2 text-white text-xs">
              0
            </small>
          </div>
          <Menu className="text-primary cursor-pointer" />
        </div>
      </div>
      <div className="mb-4 h-full pb-8">
        <figure className="w-full h-96 lg:h-[600px] bg-slate-500 relative">
          <Image
            fill
            src="/images/home-banner.png"
            alt="info"
            className="object-cover"
          />
        </figure>
      </div>

      <div className="grid grid-cols-12 gap-3 pb-8">
        {dashboardConfig?.navMenu
          ?.filter((i) => i?.title !== "Home")
          ?.map((item, index) => {
            return (
              <Link
                key={index}
                href={item?.href}
                className="col-span-6 sm:col-span-4 bg-white shadow-lg py-4 px-5 flex flex-col items-center justify-center"
              >
                <Image
                  height={38}
                  width={38}
                  src={getImageUrl(item.icon)}
                  alt="info"
                  className="object-contain pb-4"
                />
                <h6 className="text-sm font-semibold">{item?.title}</h6>
              </Link>
            )
          })}
      </div>
    </AppLayout>
  )
}

export default Homepage

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = cookie.parse(req.headers.cookie ?? "")
  const accessToken: string | null = cookies["progress-auth-access-token"]
  const user = accessToken ? await getUser(accessToken) : null

  const staff = await client.query({
    query: STAFFS,
    variables: {
      where: {
        work_email: {
          _eq: user.email,
        },
      },
    },
  })

  return {
    props: {
      user,
      staff: staff?.data?.staff?.[0],
    },
  }
}
