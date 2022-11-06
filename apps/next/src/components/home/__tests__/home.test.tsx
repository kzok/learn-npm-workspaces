import { Home } from "../home";
import { screen, render } from "@testing-library/react";

it("it renderes greeting message.", () => {
  render(<Home name="world" />);
  expect(screen.getByTestId("title").textContent).toBe("Hello, world.");
});
