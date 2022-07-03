import { render, screen } from "@testing-library/react";
import List from "./List";

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

    const container = screen.getByTestId("list-container");
    const content = screen.getAllByTestId("list-item");

    expect(container).toContainElement(content[0]);
    expect(screen.getByText(/income/i)).toBeInTheDocument();
    expect(screen.getByText(/outcome/i)).toBeInTheDocument();
  });

  it("should not be showing a list of items", () => {
    render(<List data={[]} />);

    const container = screen.getByTestId("list-container");
    const content = screen.queryByTestId("list-item");

    expect(container).not.toContainElement(content);
  });
});
