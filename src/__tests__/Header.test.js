
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", async () => {
  render(<Header />);

  // Use waitFor to handle asynchronous behavior
  await waitFor(() => {
    expect(screen.getByText("hello from the Header!")).toBeInTheDocument();
  });
});














