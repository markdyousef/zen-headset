import React from "react";
import { shallow } from "enzyme";
import NavMenu from "./index";

describe("NavMenu", () => {
  test("should match snapshot", () => {
    const wrapper = shallow(<NavMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
