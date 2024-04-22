import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import "jest-environment-jsdom"
import AppLayout from "./app-layout"
import { useRouter } from "next/router"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("AppLayout", () => {
  it("renders children and header with the given title", () => {
    const mockPush = jest.fn()
    const routeData = { asPath: "/", push: mockPush }
    ;(useRouter as jest.Mock).mockReturnValue(routeData)

    const title = "Test Layout"
    const testChild = <div data-testid="test-child">Test Child</div>

    render(<AppLayout title={title}>{testChild}</AppLayout>)

    // check if header is rendered with correct title
    const headerElement = screen.getByText(title)
    expect(headerElement).toBeInTheDocument()

    // check if children rendered
    const childElement = screen.getByTestId("test-child")
    expect(childElement).toBeInTheDocument()

    // check if sidebar rendered
    const sidebarElement = screen.getByTestId("test-sidebar")
    expect(sidebarElement).toBeInTheDocument()
  })
})
