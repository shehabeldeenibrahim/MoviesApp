import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import Home from "../Screens/Home";
import { render, waitFor, cleanup } from "@testing-library/react-native";
import { data } from "../tests/MoviesDataMock";

// intercept axios calls
jest.mock("axios");

// enzyme configuration
configure({ adapter: new Adapter() });

// do clean up after each test
afterEach(cleanup);

describe("Home Screen", () => {
  /* Test Rendering of props in DOM */
  it("fetches data and displays list", async () => {
    function returnPromise() {
      return new Promise(function (resolve, reject) {
        resolve(data);
      });
    }
    function getMoviesMock() {
      return returnPromise();
    }
    const { findByTestId, getByTestId, getByText, rerender, debug } = render(
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
    const resolvedSpan = await waitFor(() => findByTestId("list"), {
      timeout: 4000,
    });
  });
});
