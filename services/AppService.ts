import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export const appUrl: string =
  process?.env?.NEXT_PUBLIC_CONTEXT &&
  process.env.NEXT_PUBLIC_CONTEXT === "deploy-preview" &&
  process.env.NEXT_PUBLIC_PREVIEW_APP_URL
    ? process.env.NEXT_PUBLIC_PREVIEW_APP_URL
    : process.env.NEXT_PUBLIC_APP_URL ?? ""

export function getAppUrl(path: string = "/") {
  return new URL(path, appUrl)
}

export async function makeInternalRequest(
  method: "post" | "get",
  path: string,
  data?: any,
  headers?: object,
): Promise<any> {
  const config: AxiosRequestConfig<any> = {
    method: method,
    url: path,
    data: data ?? undefined,
    headers: headers ?? {
      "Content-Type": "application/json",
    },
  }

  const response: AxiosResponse = await axios.request(config)
  return response.data
}
