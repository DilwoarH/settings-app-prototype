import React, { useState } from "react"
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import "jest-environment-jsdom"
import { useRouter } from "next/router"
import mockRouter from "next-router-mock"
import { advanceTo, clear } from "jest-date-mock"
import userEvent from "@testing-library/user-event"

import CoachingBulkDelete from "."

jest.mock("next/router", () => jest.requireActual("next-router-mock"))

describe("CoachingBulkDelete Component", () => {
  beforeAll(() => {
    // Set the time zone to a fixed value (e.g., UTC) for the entire test environment
    process.env.TZ = "UTC"
  })
  beforeEach(() => {
    // Set a fixed date for the entire test
    advanceTo(new Date("2023-09-14T00:00:00Z"))
  })

  afterEach(() => {
    // Restore the original date handling after each test
    clear()
  })
  // Mock the useToast hooks
  jest.mock("../ui/use-toast", () => ({
    useToast: jest.fn(() => ({ toast: jest.fn() })),
  }))
  it("renders with initial state", () => {
    render(<CoachingBulkDelete staff_id="1" school_id="2" />)

    // Check if the component renders the initial elements
    expect(screen.getByText("Bulk Delete")).toBeInTheDocument()
    expect(screen.getByTestId("date-picker")).toBeInTheDocument()
    expect(
      screen.getByText("Warning: This action cannot be undone."),
    ).toBeInTheDocument()
    const deleteButton = screen.getByText("Delete")
    expect(deleteButton).toBeDisabled()
  })

  it("select date and enable delete button", () => {
    render(<CoachingBulkDelete staff_id="1" school_id="2" />)

    // Check if the component renders the initial elements
    const datePicker = screen.getByTestId("date-picker")
    expect(datePicker).toBeInTheDocument()
    fireEvent.click(datePicker)
    const dateButton = screen.getByRole("gridcell", { name: "14" })
    fireEvent.click(dateButton)
    // Ensure date is selected
    expect(screen.getByText("14-09-2023")).toBeInTheDocument()
    const deleteButton = screen.getByText("Delete")
    // Ensure selecting date enable delete button
    expect(deleteButton).toBeEnabled()
  })

  it("displays a confirmation dialog when Delete button is clicked", async () => {
    const { getByText, getByLabelText } = render(
      <CoachingBulkDelete staff_id="1" school_id="2" />,
    )
    const datePicker = screen.getByTestId("date-picker")
    fireEvent.click(datePicker)
    const dateButton = screen.getByRole("gridcell", { name: "14" })
    fireEvent.click(dateButton)
    const deleteButton = screen.getByText("Delete")
    fireEvent.click(deleteButton)

    // Check if the confirmation dialog is displayed
    expect(getByText("Are you absolutely sure?")).toBeInTheDocument()
    expect(getByText("This action cannot be undone.")).toBeInTheDocument()
  })

  it("calls fetch api on delete button call", async () => {
    let loading = true

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => {
        loading = false
        return { success: true }
      },
    })

    await act(async () => {
      render(<CoachingBulkDelete staff_id="1" school_id="2" />)
    })

    const datePicker = screen.getByTestId("date-picker")
    fireEvent.click(datePicker)
    const dateButton = screen.getByRole("gridcell", { name: "14" })
    fireEvent.click(dateButton)
    expect(screen.getByText("14-09-2023")).toBeInTheDocument()
    const deleteButton = screen.getByText("Delete")
    // click the delete button to open dialog
    fireEvent.click(deleteButton)

    // As Dialog has Delete button, Now there are 2 buttons with text Delete
    const deleteButtons = screen.getAllByText("Delete")
    // Click the second "Delete" button on the dialog to call delete action
    fireEvent.click(deleteButtons[1])

    // Define a regex pattern to match the ISO string format
    const isoStringPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/

    await waitFor(() => {
      // Getting the request body and parse it as JSON
      const requestBody = JSON.parse(global.fetch.mock.calls[0][1].body)

      const publishedAt = requestBody.published_at

      // Check if published_at matches the pattern
      expect(publishedAt).toMatch(isoStringPattern)

      // Check other properties  matches
      expect(requestBody.staff_id).toBe("1")
      expect(requestBody.school_id).toBe("2")

      expect(loading).toBe(false) // Ensure loading is false after data call
    })
  })
})
