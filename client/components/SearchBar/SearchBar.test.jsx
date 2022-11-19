import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

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

describe("SearchBar", () => {
  let component;

  beforeEach(() => {
    component = render(<SearchBar />);
  });

  test("SearchBar has an input element", () => {
    const placeholder = component.container.querySelector("input").getAttribute("placeholder");
    expect(placeholder).toBe("Buscar productos, marcas y más...");
  });
});
