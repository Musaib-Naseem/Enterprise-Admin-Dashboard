import { screen, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Input from "./Input";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  test("renders label", () => {
    render(<Input label="username" />);

    expect(screen.getByText("username")).toBeInTheDocument();
  });

  test("renders input with placeholder", () => {
    render(<input placeholder="Enter placeholder" />);

    expect(
      screen.getByPlaceholderText("Enter placeholder"),
    ).toBeInTheDocument();
  });

  test("Renders error message", () => {
    render(<Input error="Username is required" />);

    expect(screen.getByText("Username is required")).toBeInTheDocument();
  });

  test("Calls onChange when user types", async () => {
    const user = userEvent.setup();

    const handleChange = vi.fn();

    render(<Input onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    await user.type(input, "John");

    expect(handleChange).toHaveBeenCalled();
  });

  test("Expect type value", async () => {
    const user = userEvent.setup();

    render(<input />);

    const input = screen.getByRole("textbox");

    await user.type(input, "textbook");

    expect(input).toHaveValue("textbook");
  });
});
