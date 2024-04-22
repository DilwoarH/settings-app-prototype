import { UPDATE_OBSERVATION } from "@/gql/mutations/observations"
import { client } from "@/services/ApolloClient"
import { getUser } from "@/services/AuthService"
import * as cookie from "cookie"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const cookies = cookie.parse(req.headers.cookie ?? "")
  const accessToken: string | null = cookies["progress-auth-access-token"]
  const user = accessToken ? await getUser(accessToken) : null

  if (req.method == "POST" && user) {
    const body = JSON.parse(req.body)

    const response = await client.mutate({
      mutation: UPDATE_OBSERVATION,
      variables: {
        where: {
          published_at: {
            _lte: body.published_at,
          },
          deleted_at: {
            _is_null: true,
          },
          deleted_by: {
            _is_null: true,
          },
          school_id: {
            _eq: body.school_id,
          },
        },
        _set: {
          deleted_by: body.staff_id,
          deleted_at: new Date().toISOString(),
        },
      },
    })

    res.status(200).json(response.data)
  } else {
    res.status(404).json({ error: "Forbidden!" })
  }
}
