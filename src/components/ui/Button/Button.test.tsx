import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renders the button", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Save");
  });

  it("calls onclick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Save</Button>);
    await user.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Applies the primary variant", () => {
    render(<Button>Save</Button>);

    expect(screen.getByRole("button")).toHaveClass("bg-blue-600", "text-white");
  });

  it("Applies the secondary variant", () => {
    render(<Button variant="secondary">Save</Button>);

    expect(screen.getByRole("button")).toHaveClass("bg-gray-600");
  });

  it("Applies the danger variant", () => {
    render(<Button variant="danger">Save</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-red-600", "text-white");
  });
});
