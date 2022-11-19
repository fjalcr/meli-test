import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentWrapper from "./ContentWrapper";

describe("ContentWrapper", () => {
  let component;

  beforeEach(() => {
    component = render(
      <ContentWrapper>
        <div>Hola</div>
      </ContentWrapper>
    );
  });

  test("ContentWrapper has a child element", () => {
    component.getByText("Hola");
  });
});
