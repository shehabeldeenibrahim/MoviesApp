import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import MoviesList from "../Components/MoviesList";
import { fireEvent, render } from "@testing-library/react-native";
import { data } from "./MoviesDataMock";

configure({ adapter: new Adapter() });

describe("Movies List", () => {
  /* Test Rendering of props in DOM */
  it("Movies List Rendered Correctly", async () => {
    const retrieveMore = jest.fn();
    const { getByTestId, getByText, UNSAFE_getByType } = render(
      <MoviesList
        retrieveMore={retrieveMore}
        data={data}
        refreshing={false}
        loading={false}
      />
    );
    /* There is a list rendered */
    const listRendered = getByTestId("list");
    expect(listRendered).toBeDefined();

    /* Check the data is rendered correctly */
    const dataRendered = getByText("The Unholy");
    expect(dataRendered).toBeDefined();

    /* All Data passed rendered */
    const views = UNSAFE_getByType("View");
    expect(views).toBeDefined();
    expect(views.children.length).toEqual(data.length);
  });

  /* Test Retrieve more function is called on scroll end
   to retrieve more data (LAZY LOADING) */
  it("Lazy Loading", () => {
    /* Define mock function to retrieveMore */
    const retrieveMore = jest.fn();

    /* Render Component */
    const { getByTestId, getByText, UNSAFE_getByType } = render(
      <MoviesList
        retrieveMore={retrieveMore}
        data={data}
        refreshing={false}
        loading={false}
      />
    );
    /* Scroll event configuration */
    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };
    /* Fire scroll event and check if retieveMore has been called */
    fireEvent.scroll(getByTestId("list"), eventData);
    expect(retrieveMore).toHaveBeenCalled();
  });
});
