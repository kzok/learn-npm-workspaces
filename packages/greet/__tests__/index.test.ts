import { greet } from "../index";

it("can greet", () => {
  expect(greet("world")).toBe("Hello, world.");
  expect(greet("John Doe")).toBe("Hello, John Doe.");
});
