jest.useFakeTimers();
import { fireEvent, render } from "@testing-library/react-native";
import { View } from "native-base";
import React from "react";
import { FlatList } from "react-native";
import renderer from "react-test-renderer";
import MovieCard from "../Components/MovieCard";
import Home from "./Home";

describe("<Home />", () => {
  it("has 1 child", async () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

it("Flatlist Unit Test", () => {
  const onEndReached = jest.fn();
  const { getByTestId } = render(
    <FlatList
      data={Array.from({ length: 10 }, (_, key) => ({ key: `${key}` }))}
      renderItem={() => (
        <MovieCard
          title={"Test"}
          image_uri={"https://picsum.photos/536/354"}
          date={"22/55/5556"}
          overview={"scsdcs"}
          votes={456}
          language={"en"}
        />
      )}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
      testID="flat-list"
    />
  );
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

  fireEvent.scroll(getByTestId("flat-list"), eventData);
  expect(onEndReached).toHaveBeenCalled();
});
