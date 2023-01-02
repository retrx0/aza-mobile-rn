import React from "react";
// import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react-native";
import WelcomeScreen from "../WelcomeScreen";

// test("renders Welcome Screen correctly", () => {
//   const tree = renderer.create(<WelcomeScreen />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

test("renders Welcome Screen correctly", () => {
  const allQuestions = ["q1", "q2"];
  const mockFn = jest.fn();
  // render(<WelcomeScreen />);
  //   const answerInputs = screen.getAllByLabelText('answer input');
  //   fireEvent.changeText(answerInputs[0], 'a1');
  //   fireEvent.changeText(answerInputs[1], 'a2');
  //   fireEvent.press(screen.getByText('Submit'));
  // expect(mockFn).toBeCalledWith({
  //   1: { q: 'q1', a: 'a1' },
  //   2: { q: 'q2', a: 'a2' },
  // });
});
