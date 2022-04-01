import { render, screen } from "@testing-library/react"
import Header from "."

describe("Header Component", () => {
  it('should showing the header in the document', () => {
    render(<Header />);

    expect(screen.getByText(/fineasy/i)).toBeInTheDocument();
  })
});