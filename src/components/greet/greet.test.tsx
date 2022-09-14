import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("renders correctly...", () => {
    render(<Greet />);
    const htmlElement = screen.getByText("Hello");
    expect(htmlElement).toBeInTheDocument();
  });
});
describe("Nested...", () => {
  test("renders a name...", () => {
    render(<Greet name="Oybek" />);
    const htmlElement = screen.getByText("Hello Oybek");
    expect(htmlElement).toBeInTheDocument();
  });
});
