import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("render correctly...", () => {
    render(<Application />);

    const pageHeader = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeader).toBeInTheDocument();

    const sectionHeader = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeader).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
