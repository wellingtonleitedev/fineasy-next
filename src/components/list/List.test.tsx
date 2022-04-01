import { render, screen } from "@testing-library/react";
import List from ".";

describe("List Component", () => {
  it("should be showing a list of items", () => {
    const data = [
      <>
        <h3>Income</h3>
      </>,
      <>
        <h3>Outcome</h3>
      </>,
    ];

    render(<List data={data} />);

    expect(screen.getByText(/income/i)).toBeInTheDocument();
    expect(screen.getByText(/outcome/i)).toBeInTheDocument();
  });

  it("should not be showing a list of items", () => {
    render(<List data={[]} />);

    expect(screen.queryByTestId("list-item")).not.toBeInTheDocument();
  });
});
