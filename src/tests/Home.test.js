jest.useFakeTimers();
import {
  act,
  fireEvent,
  render,
  waitFor,
  waitForElement,
} from "@testing-library/react-native";
import { View } from "native-base";
import React from "react";
import { FlatList } from "react-native";
import renderer from "react-test-renderer";
// import App from "../../App";
import getMovies from "../Api/api";
import MovieCard from "../Components/MovieCard";
import Home from "../Screens/Home";
import fetchMock from "jest-fetch-mock";
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

describe("<Home />", () => {
  it("has 1 child", async () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

// test("renders learn react link", async () => {
//   // jest.mock("NativeAnimatedHelp");

//   // getMovies(1);

//   const { findByTestId } = render(<App />);

//   console.log(findByTestId("noData"));
//   await getMovies(1);
//   expect(findByTestId("dataArrived"));
// });

// describe("api calls", () => {
//   it("can make api calls", async () => {
//     // const promise = Promise.resolve();
//     // const handleUpdateUsername = jest.fn(() => promise);
//     // const flushPromises = () => new Promise(setImmediate);
//     // const { findByTestId } = render(<App></App>);
//     // b = await getMovies(1);
//     // await flushPromises();

//     // findByTestId("noData");
//     // b = await getMovies(1);
//     // await flushPromises();
//     // a = findByTestId("noData");

//     // await act(() => promise);
//     await act(() => renderer.create(<App></App>));
//   });
// });
