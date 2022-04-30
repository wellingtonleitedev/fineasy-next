import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddModal from ".";

describe("Add Modal", () => {
  it("should be able to open the modal", () => {
    render(<AddModal show />);

    expect(screen.getByText(/modal/i)).toBeInTheDocument();
  });

  it("should not be able to open the modal", async () => {
    render(<AddModal show={false} />);

    await waitFor(() =>
      expect(screen.queryByText(/modal/i)).not.toBeInTheDocument()
    );
  });

  it("should be able submit a new transaction", async () => {
    await waitFor(async () => render(<AddModal show />));

    const mockHandleSubmit = jest.fn();

    jest.mock(".", () => ({
      handleSubmit: mockHandleSubmit,
    }));

    const titleInput = screen.getByPlaceholderText("Title");
    const dateInput = screen.getByPlaceholderText("Date");
    const priceInput = screen.getByPlaceholderText("Price");

    fireEvent.change(titleInput, { target: { value: "Pizza" } });

    const date = new Date();
    fireEvent.change(dateInput, { target: { value: date } });
    fireEvent.change(priceInput, { target: { value: 10 } });

    await act(async () =>
      userEvent.click(screen.getByRole("button"), undefined, {
        skipPointerEventsCheck: true,
      })
    );

    await waitFor(async () =>
      expect(mockHandleSubmit).toBeCalledWith({
        title: "Pizza",
        date,
        priceInput: 10,
      })
    );
  });
});
