import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
  it("should be able to open the modal", () => {
    const title = "Testing Modal";
    const message = "This modal should be opened";
    render(
      <Modal show title={title}>
        <p>{message}</p>
      </Modal>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("should not be able to open the modal", async () => {
    const title = "Testing Modal";
    const message = "This modal should be opened";
    render(
      <Modal show={false} title={title}>
        <p>{message}</p>
      </Modal>
    );

    await waitFor(() => {
      expect(screen.queryByText(title)).not.toBeInTheDocument();
      expect(screen.queryByText(message)).not.toBeInTheDocument();
    });
  });
});
