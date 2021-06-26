jest.useFakeTimers();
import { render } from "@testing-library/react-native";
import React from "react";
import MovieCard from "../Components/MovieCard";
import { data } from "./MoviesDataMock";

describe("<MovieCard />", () => {
  it("Movie Card Rendered Correctly", async () => {
    /* Render Component */
    const { getByTestId, getByText, UNSAFE_getByType } = render(
      <MovieCard
        title={data[0].title}
        image_uri={data[0].poster_path}
        date={data[0].release_date}
        overview={data[0].overview}
        votes={data[0].vote_count}
        language={data[0].original_language}
      />
    );
    /* Title rendered */
    const listRendered = getByTestId("title");
    expect(listRendered).toBeDefined();

    /* Check the tile rendered correctly */
    const titleRendered = getByText("The Unholy");
    expect(titleRendered).toBeDefined();

    /* Check the date rendered correctly */
    const dataRendered = getByText("2021-03-31");
    expect(dataRendered).toBeDefined();

    /* Image URI */
    const image = UNSAFE_getByType("Image");
    expect(image).toBeDefined();
    expect(image.props["source"]["uri"]).toEqual(
      "/b4gYVcl8pParX8AjkN90iQrWrWO.jpg"
    );
  });
});
