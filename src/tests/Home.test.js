import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import Home from "../Screens/Home";
import { fireEvent, render } from "@testing-library/react-native";
import { data } from "./MoviesDataMock";

configure({ adapter: new Adapter() });

describe("Home Screen", () => {
  /* Test Rendering of props in DOM */
  it("Home Screen Rendered Correctly", async () => {
    const { getByTestId, getByText, UNSAFE_getByType, debug } = render(
      <Home />
    );

    /* Check that NoData Component is rendered
      it will always be rendered as Home does not take
      data as props so we cannot simulate the behavior
    */
    const dataRendered = getByText("No data available");
    expect(dataRendered).toBeDefined();
  });
});
