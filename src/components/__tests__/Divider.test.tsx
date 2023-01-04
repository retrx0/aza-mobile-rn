import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Divider from "../divider/Divider";

it(`renders divider correctly`, () => {
  const tree = render(<Divider />).toJSON();
  // expect(tree).toMatchSnapshot();
});
