import React, { useState } from "react"
import { render, screen, fireEvent, prettyDOM } from "@testing-library/react"
import "@testing-library/jest-dom"
import "jest-environment-jsdom"
import ActionDialog from "."

describe("ActionDialog", () => {
  it("renders the dialog with provided title and description", () => {
    const open = true
    const setOpen = jest.fn()
    const onAction = jest.fn()
    const title = "Confirmation"
    const description = "Are you sure you want to proceed?"
    const actionLabel = "Proceed"

    render(
      <ActionDialog
        open={open}
        setOpen={setOpen}
        onAction={onAction}
        title={title}
        description={description}
        actionLabel={actionLabel}
      >
        <button>Open Dialog</button>
      </ActionDialog>,
    )

    // Check if the dialog content is visible
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByText("Cancel")).toBeInTheDocument()
    expect(screen.getByText(actionLabel)).toBeInTheDocument()
  })

  it("calls onAction when the action button is clicked", () => {
    const open = true
    const setOpen = jest.fn()
    const onAction = jest.fn()
    const title = "Confirmation"
    const actionLabel = "Proceed"

    render(
      <ActionDialog
        open={open}
        setOpen={setOpen}
        onAction={onAction}
        title={title}
        actionLabel={actionLabel}
      >
        <button>Open Dialog</button>
      </ActionDialog>,
    )

    // Click the action button
    fireEvent.click(screen.getByText(actionLabel))

    // Check if the onAction function was called
    expect(onAction).toHaveBeenCalledTimes(1)
  })

  it("calls setOpen when the cancel button is clicked", () => {
    const open = true
    const setOpen = jest.fn()
    const onAction = jest.fn()
    const title = "Confirmation"
    const actionLabel = "Proceed"

    render(
      <ActionDialog
        open={open}
        setOpen={setOpen}
        onAction={onAction}
        title={title}
        actionLabel={actionLabel}
      >
        <button>Open Dialog</button>
      </ActionDialog>,
    )

    // Click the cancel button
    fireEvent.click(screen.getByText("Cancel"))

    // Check if the setOpen function was called with false
    expect(setOpen).toHaveBeenCalledWith(false)
  })
})
