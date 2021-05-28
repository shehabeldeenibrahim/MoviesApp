import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import MoviesList from "../Components/MoviesList";
import { render } from "@testing-library/react-native";
import { data } from "./MoviesDataMock";

configure({ adapter: new Adapter() });

describe("Movies List", () => {
  it("renders correctly", () => {
    shallow(<MoviesList />);
  });

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
  // it("Flatlist Unit Test", () => {
  //   const onEndReached = jest.fn();
  //   const { getByTestId } = render(
  //     <FlatList
  //       data={Array.from({ length: 10 }, (_, key) => ({ key: `${key}` }))}
  //       renderItem={() => (
  //         <MovieCard
  //           title={"Test"}
  //           image_uri={"https://picsum.photos/536/354"}
  //           date={"22/55/5556"}
  //           overview={"scsdcs"}
  //           votes={456}
  //           language={"en"}
  //         />
  //       )}
  //       onEndReached={onEndReached}
  //       onEndReachedThreshold={0.2}
  //       testID="flat-list"
  //     />
  //   );
  //   const eventData = {
  //     nativeEvent: {
  //       contentOffset: {
  //         y: 500,
  //       },
  //       contentSize: {
  //         // Dimensions of the scrollable content
  //         height: 500,
  //         width: 100,
  //       },
  //       layoutMeasurement: {
  //         // Dimensions of the device
  //         height: 100,
  //         width: 100,
  //       },
  //     },
  //   };

  //   fireEvent.scroll(getByTestId("flat-list"), eventData);
  //   expect(onEndReached).toHaveBeenCalled();
  // });
});
