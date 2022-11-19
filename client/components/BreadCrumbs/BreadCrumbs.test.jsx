import React from "react";
import { render } from "@testing-library/react";
import BreadCrumbs from "./BreadCrumbs";

describe("BreadCrumbs", () => {
  let component;

  beforeEach(() => {
    const items = [
      { name: "Autos", id: "1" },
      { name: "Motocicletas", id: "2" },
    ];
    component = render(<BreadCrumbs items={items} />);
  });

  test("BreadCrumbs has two elements", () => {
    const elements = component.container.querySelectorAll(".breadCrumbsItem");
    expect(elements.length).toBe(2);
  });

  test("BreadCrumbs has an Auto and Motocicletas category", () => {
    component.getByText("Autos »");
    component.getByText("Motocicletas");
  });
});
