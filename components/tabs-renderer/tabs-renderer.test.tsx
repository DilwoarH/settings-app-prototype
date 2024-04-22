import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import "jest-environment-jsdom"
import TabsRenderer from "."

describe("TabsRenderer", () => {
  const tabsData = [
    {
      label: "Tab 1",
      value: "tab1",
      content: <div>Tab 1 Content</div>,
    },
    {
      label: "Tab 2",
      value: "tab2",
      content: <div>Tab 2 Content</div>,
    },
  ]

  it("renders tabs and content", () => {
    // Render the TabsRenderer component with some sample data
    render(<TabsRenderer tabsData={tabsData} defaultValue="tab1" />)

    // Check if the tab buttons are rendered
    const tab1Button = screen.getByRole("tab", { name: "Tab 1" })
    const tab2Button = screen.getByRole("tab", { name: "Tab 2" })

    // Check if the initial content is rendered
    const tab1Content = screen.getByText("Tab 1 Content")
    const tab2Content = screen.queryByText("Tab 2 Content") // Content for the inactive tab should not be visible

    expect(tab1Button).toBeInTheDocument()
    expect(tab2Button).toBeInTheDocument()
    expect(tab1Content).toBeInTheDocument()
    expect(tab2Content).not.toBeInTheDocument()
  })

  it("switches tabs when clicked", () => {
    render(<TabsRenderer tabsData={tabsData} defaultValue="tab1" />)

    const tab2Trigger = screen.getByText("Tab 2")

    // fireEvent.click(tab2Trigger)
    fireEvent.mouseDown(tab2Trigger)

    // Check if the content of the second tab is now visible
    const tab1Content = screen.queryByText("Tab 1 Content")
    const tab2Content = screen.queryByText("Tab 2 Content")

    expect(tab1Content).not.toBeInTheDocument()
    expect(tab2Content).toBeInTheDocument()
  })
})
