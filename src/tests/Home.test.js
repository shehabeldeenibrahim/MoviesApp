import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import Home from "../Screens/Home";
import {
  render,
  waitFor,
  cleanup,
  fireEvent,
} from "@testing-library/react-native";
import { data } from "../tests/MoviesDataMock";

// intercept axios calls
jest.mock("axios");

// enzyme configuration
configure({ adapter: new Adapter() });

/*  MOCK HELPER FUNCTIONS */

function returnPromise() {
  return new Promise(function (resolve, reject) {
    /* Simulate success */
    resolve(data);
  });
}

/* Mock if movies Api fetched successfully */

function getMoviesMock() {
  return returnPromise();
}
function rejectPromise() {
  return new Promise(function (resolve, reject) {
    /* Simulate failure */
    reject(data);
  });
}

/* Mock if movies Api failed to fetch */
function rejectMoviesMock() {
  return rejectPromise();
}

// Do clean up after each test
afterEach(cleanup);

// Tests
describe("Home Screen tests", () => {
  /* (TEST1) Test transition from no data to data retreived after api call */
  it("test transition from no data to data retreived after api call", async () => {
    const { findByTestId, queryByTestId, getByText, rerender, debug } = render(
      <Home getMovies={getMoviesMock} />
    );

    /* Check that NoData Component is rendered
     when the component first renders before api call is done
     and check that it is rendered correctly with given text
    */
    const dataRendered = getByText("No data available");
    expect(dataRendered).toBeDefined();

    /* Check if list of movies are rendered after
      api call is done, and state updates
      by passing mocked fn simulating API call
    */
    rerender(<Home getMovies={getMoviesMock} />);
    const list = await waitFor(() => findByTestId("list"), {
      timeout: 4000,
    });

    /* Ensure that noData is dismissed and moviesList is rendered */
    expect(queryByTestId("no-data")).toBeFalsy();
    expect(list).toBeDefined();
  });

  /* (TEST2) Test in the case when API call fails */
  it("test if api call failed", async () => {
    const { getByText, rerender, debug } = render(
      <Home getMovies={rejectMoviesMock} />
    );

    /* Check that NoData Component is rendered
     when the component first renders before api call is done
     and check that it is rendered correctly with given text
    */
    const dataRendered = getByText("No data available");
    expect(dataRendered).toBeDefined();

    /* Rerender and check again after API call is done */
    rerender(<Home getMovies={rejectMoviesMock} />);

    /* noData should still be rendered */
    expect(dataRendered).toBeDefined();
  });

  /* (TEST3) Testing lazy loading activity indicator after scroll (full functionality) */
  it("testing lazy loading activity indicator after scroll (full functionality)", async () => {
    const { findByTestId, queryByTestId, rerender, debug } = render(
      <Home getMovies={getMoviesMock} />
    );

    /* Before scroll event loader shouldnt be visible */
    expect(queryByTestId("activity-indicator")).toBeFalsy();

    /* rerender and check sfind moviesList */
    rerender(<Home getMovies={getMoviesMock} />);
    const list = await waitFor(() => findByTestId("list"), {
      timeout: 4000,
    });

    /* Scroll event configuration */
    const eventData = {
      nativeEvent: {
        contentOffset: {
          /* Change this to test
            y should be greater than the outcome of the following
            equation:
            contentHeight - (screenHeight+ 0.2 * screenHeight) + 1
           */

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
    fireEvent.scroll(list, eventData);

    /* Rerender and test if loader was visible */
    rerender(<Home getMovies={getMoviesMock} />);
    loadingIndicator = await waitFor(() => findByTestId("activity-indicator"), {
      timeout: 4000,
    });
    expect(loadingIndicator).toBeDefined();
  });
});
