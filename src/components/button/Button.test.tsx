import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Component", () => {
  it("should be able to render a button", () => {
    render(<Button type="button">Submit</Button>);

    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  it("should be able to trigger the action on click", async () => {
    const mockOnClick = jest.fn();

    render(
      <Button type="button" onClick={mockOnClick}>
        Submit
      </Button>
    );

    await userEvent.click(screen.getByText(/submit/i));

    expect(mockOnClick).toHaveBeenCalled();
  });
});
