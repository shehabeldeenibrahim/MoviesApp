import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import getMovies from "../Api/api";
import fetchMock from "jest-fetch-mock";

// Configs
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");
configure({ adapter: new Adapter() });

/* Movies API Tests */
describe("API Test", () => {
  it("App renders Correctly", async () => {
    const flushPromises = () => new Promise(setImmediate);

    /* Test API Returns more than one element */
    moviesData = await getMovies(1);
    await flushPromises();
    expect(moviesData.results.length).toBeGreaterThan(1);

    /* Test API Should return page 1 if not given page number */
    moviesData = await getMovies();
    await flushPromises();
    expect(moviesData.results.length).toBeGreaterThan(1);

    /* Test API Should  return page 1 if given a non int */
    moviesData = await getMovies("aaa");
    await flushPromises();
    expect(moviesData.results.length).toBeGreaterThan(1);

    /* Test API Should return error if number of pages > 500 */
    moviesData = await getMovies(555555);
    await flushPromises();
    /* Error expected from API */
    expect(moviesData).toEqual({
      errors: ["page must be less than or equal to 500"],
    });
  });
});
