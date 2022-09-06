import * as React from "react";
import renderer from "react-test-renderer";
import Divider from "../divider/Divider";

it(`renders divider correctly`, () => {
  const tree = renderer.create(<Divider />).toJSON();

  expect(tree).toMatchSnapshot();
});
