import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import "jest-environment-jsdom"
import UserGreet from "./user-greet"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

const demoStaff = {
  id: "b27a5ba8-422c-4c90-992e-eeadcd6b8f02",
  title: "Mr",
  surname: "Hoth",
}

describe("UserGreet", () => {
  it("renders a user greet", () => {
    render(<UserGreet staff={demoStaff} />)

    const greetElement = screen.getByRole("heading")

    expect(greetElement).toBeInTheDocument()
    expect(greetElement).toHaveTextContent(
      `Hello, ${demoStaff.title} ${demoStaff.surname} 👋`,
    )
  })
})
