import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

describe("Header", () => {
  let component;

  beforeEach(() => {
    component = render(<Header />);
  });

  test("Header has logo image", () => {
    const logo = component.container.querySelector("img").getAttribute("src");
    expect(logo).toBe("/assets/Logo_ML.png");
  });

  test("Header input search", () => {
    const placeholder = component.container.querySelector("input").getAttribute("placeholder");
    expect(placeholder).toBe("Buscar productos, marcas y más...");
  });
});
