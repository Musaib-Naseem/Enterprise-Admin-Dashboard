import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  test("renders when open is true", () => {
    render(
      <Modal open={true}>
        <h1>Delete User</h1>
      </Modal>,
    );

    expect(screen.getByText("Delete User")).toBeInTheDocument();
  });

  test("does not render when open is true", () => {
    render(
      <Modal open={false}>
        <h1>Delete User</h1>
      </Modal>,
    );

    expect(screen.queryByText("Delete User")).not.toBeInTheDocument();
  });
});
