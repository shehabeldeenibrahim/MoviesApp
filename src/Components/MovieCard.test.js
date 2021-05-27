jest.useFakeTimers();
import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./MovieCard";

describe("<MovieCard />", () => {
  it("has 1 child", async () => {
    const tree = renderer.create(<MovieCard />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
