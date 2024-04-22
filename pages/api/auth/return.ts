import {
  accessTokenCookieName,
  getAuthRedirectURL,
  getUser,
  refreshTokenCookieName,
} from "@/services/AuthService"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const query = req.query
  const { accessToken, refreshToken } = {
    accessToken: query["access-token"],
    refreshToken: query["refresh-token"],
  }
  if (!accessToken) return res.redirect(getAuthRedirectURL())

  const user = await getUser(accessToken.toString())
  if (!user) return res.redirect(getAuthRedirectURL())

  const maxAge = 1 * 24 * 60 * 60 // 1 day
  res.setHeader("set-cookie", [
    `${accessTokenCookieName}=${accessToken}; path=/; max-age=${maxAge}; SameSite=Lax; secure`,
    `${refreshTokenCookieName}=${refreshToken}; path=/; max-age=${maxAge}; SameSite=Lax; secure`,
  ])

  return res.redirect("/")
}
