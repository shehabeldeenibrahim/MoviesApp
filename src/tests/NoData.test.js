jest.useFakeTimers();
import { render } from "@testing-library/react-native";
import React from "react";
import NoData from "../Components/NoData";

describe("<MovieCard />", () => {
  it("Movie Card Rendered Correctly", async () => {
    /* Render Component */
    const { getByTestId, getByText, UNSAFE_getByType } = render(<NoData />);
    /* Title rendered */
    const listRendered = getByTestId("no-data");
    expect(listRendered).toBeDefined();

    /* Check the text rendered correctly */
    const dataRendered = getByText("No data available");
    expect(dataRendered).toBeDefined();

    /* Image URI */
    const image = UNSAFE_getByType("Image");
    expect(image).toBeDefined();
  });
});
