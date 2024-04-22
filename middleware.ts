import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import {
  getAccessTokenCookie,
  getAuthRedirectURL,
  getUser,
} from "./services/AuthService"

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const accessToken: string | null = getAccessTokenCookie(request)
  if (!accessToken) return NextResponse.redirect(getAuthRedirectURL())

  const user = await getUser(accessToken)
  if (!user) return NextResponse.redirect(getAuthRedirectURL())

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
