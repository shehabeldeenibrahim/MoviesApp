import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "../../App";
import { render } from "@testing-library/react-native";

configure({ adapter: new Adapter() });

describe("App", async () => {
  it("App renders Correctly", () => {
    const { getByTestId, getByText, UNSAFE_getByType, debug } = render(<App />);

    /* Loader Rendered 
    Will always render loader, as fonts loading cannot be simulated
    ins Jest, so component cannot be further tested
    */
    const loaderRendered = getByTestId("app-loader");
    expect(loaderRendered).toBeDefined();
  });
});
