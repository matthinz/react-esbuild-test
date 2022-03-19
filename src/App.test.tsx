import React from "react";
import renderer from "react-test-renderer";

import { App } from "./App";

test("renders", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toEqual({
    type: "div",
    props: {},
    children: ["Hello world"],
  });
});
