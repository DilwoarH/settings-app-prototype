import { NextRequest } from "next/server"
import { appUrl } from "./AppService"

export const cookieTimeout: number = 1 * 24 * 60 * 60 // 1 day
export const accessTokenCookieName: string = "progress-auth-access-token"
export const refreshTokenCookieName: string = "progress-auth-refresh-token"
export const appAuthRedirectUrl: string = `${appUrl}/api/auth/return`
export const ssoHost: string | null =
  process.env.NEXT_PUBLIC_PROGRESSTEACHING_SSO_HOST ?? null

export function getAccessTokenCookie(request: NextRequest): string | null {
  return request.cookies.get(accessTokenCookieName)?.value ?? null
}

export function getAuthRedirectURL(): string {
  const authURL = new URL(ssoHost ?? "")
  authURL.searchParams.set("redirect", appAuthRedirectUrl)

  return authURL.toString()
}

export async function getUser(accessToken: string): Promise<any | boolean> {
  if (!ssoHost) return false

  try {
    const request = await fetch(`${ssoHost}/auth/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const { data } = await request.json()

    return data.user
  } catch (error) {
    console.error(error)
    return false
  }
}
