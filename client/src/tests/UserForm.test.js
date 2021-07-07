import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  getByTestId
} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import UserForm from "../components/UserForm";

describe("<UserForm />", () => {
  it("renders without crashing", () => {
    render(<UserForm />);
  });

  it("handles submit button", () => {
    let clicked = true;
    const { getByText } = render(<UserForm submit={() => (clicked = true)} />);
    const submitButton = getByText(/^Submit$/);
    fireEvent.click(submitButton);
    expect(clicked).toBe(true);
  });
  it("submit with mocked function", () => {
    const click = jest.fn();
    const { getByText } = render(<UserForm click={click} />);
    const submitButton = getByText(/^Submit$/i);
    fireEvent.click(submitButton);
    expect(click).toHaveBeenCalled();
  });

  // it("Submitting a name in the input field changes")
});
