import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  let component;

  beforeEach(() => {
    component = render(<Logo />);
  });

  test("Logo has an image", () => {
    const logo = component.container.querySelector("img").getAttribute("src");
    expect(logo).toBe("/assets/Logo_ML.png");
  });

  test("Logo has a link", () => {
    const href = component.container.querySelector("a").getAttribute("href");
    expect(href).toBe("/");
  });
});
