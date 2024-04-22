import CoachingBulkDelete from "@/components/coaching-bulk-delete"
import AppLayout from "@/components/layout/app-layout"
import TabsRenderer from "@/components/tabs-renderer"
import { GetServerSideProps } from "next"
import * as cookie from "cookie"
import React from "react"
import { getUser } from "@/services/AuthService"
import { client } from "@/services/ApolloClient"
import { STAFFS } from "@/gql/queries/staffs"

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = cookie.parse(req.headers.cookie ?? "")
  const accessToken: string | null = cookies["progress-auth-access-token"]
  const user = accessToken ? await getUser(accessToken) : null

  if(!user) {
    return {
      notFound: true
    }
  }

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

const CoachingPage = ({ staff }: any) => {
  const tabsData = [
    {
      label: "Permissions",
      value: "permissions",
      content: (
        <>
          <p>Permission</p>
        </>
      ),
    },
    {
      label: "Form",
      value: "form",
      content: (
        <>
          <p>Form</p>
        </>
      ),
    },
    {
      label: "History",
      value: "history",
      content: (
        <>
          <CoachingBulkDelete
            staff_id={staff?.id}
            school_id={staff?.school_id}
          />
        </>
      ),
    },
  ]

  return (
    <AppLayout title="Coaching">
      <div className="pt-8">
        <TabsRenderer tabsData={tabsData} defaultValue="permissions" />
      </div>
    </AppLayout>
  )
}

export default CoachingPage
