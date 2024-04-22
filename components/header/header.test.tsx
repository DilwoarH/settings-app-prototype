import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import "jest-environment-jsdom"
import Header from "./header"
import { useRouter } from "next/router"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("Header", () => {
  it("renders a header with page name passed as title", () => {
    ;(useRouter as jest.Mock).mockReturnValue({ pathname: "/appraisal" })
    render(<Header title="Appraisal" />)

    const headerElement = screen.getByTestId("test-header")

    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveTextContent("Appraisal")
  })

  it("hides back button in home directory", () => {
    ;(useRouter as jest.Mock).mockReturnValue({ pathname: "/" })
    render(<Header title="Appraisal" />)

    const headerBackElement = screen.queryByTestId("test-header-back")
    expect(headerBackElement).not.toBeInTheDocument()
  })

  it("renders a back button if directory is not home", () => {
    ;(useRouter as jest.Mock).mockReturnValue({ pathname: "/any-other-path" })
    render(<Header title="Appraisal" />)

    const headerBackElement = screen.queryByTestId("test-header-back")
    expect(headerBackElement).toBeInTheDocument()
  })
})
