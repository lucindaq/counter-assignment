import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const headingElement = screen.getByText(/Counter/i);
  expect(headingElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId("count");
  expect(countElement.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText("+");
  const countElement = screen.getByTestId("count");

  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText("-");
  const countElement = screen.getByTestId("count");

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe("-1");
});
