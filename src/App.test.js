import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Daily Drinks", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Daily Drinks/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders content", () => {
  const { queryByTestId } = render(<App />);
  const contentElement = queryByTestId("app_content");
  expect(contentElement).toBeInTheDocument();
});

test("renders add button area", () => {
  const { queryByTestId } = render(<App />);
  const addElement = queryByTestId("app_add_orderItem");
  expect(addElement).toBeInTheDocument();
});
