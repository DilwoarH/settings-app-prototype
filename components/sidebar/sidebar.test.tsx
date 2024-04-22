import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import "jest-environment-jsdom"
import { useRouter } from "next/router"
import Sidebar from "./sidebar"
import { dashboardConfig } from "@/config/dashboard"

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("Sidebar", () => {
  it("renders correct icons and links and active path icon color", () => {
    const mockPush = jest.fn()
    const routeData = { asPath: "/", push: mockPush }
    ;(useRouter as jest.Mock).mockReturnValue(routeData) // Set the initial path for testing

    render(<Sidebar items={dashboardConfig.navMenu} />)

    const sidebarItems = screen.getAllByRole("button")

    expect(sidebarItems).toHaveLength(dashboardConfig.navMenu.length)

    dashboardConfig.navMenu.forEach((item, index) => {
      const sidebarItem = sidebarItems[index]
      //   expect(sidebarItem).toHaveTextContent(item.title); // in future if title is rendered beside icon uncomment this line

      // Find the SVG element within the sidebar item
      const svgElement = sidebarItem.querySelector("svg")
      expect(svgElement).toBeInTheDocument()

      // Simulate a click on the sidebar item
      fireEvent.click(sidebarItem)

      // Ensure that the router's push function was called with the expected path
      expect(mockPush).toHaveBeenCalledWith(item.href)

      // Check if the button background changes based on the active route
      if (routeData.asPath === item.href) {
        expect(sidebarItem).toHaveClass("bg-pt-primarydark")
      } else {
        expect(sidebarItem).not.toHaveClass("bg-pt-primarydark")
      }
    })
  })
})
