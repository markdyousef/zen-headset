import React from "react";
import ItemList from "./index";
import { shallow } from "enzyme";

const ITEMS = [
  {
    by: "rchaudhary",
    descendants: 9,
    id: 17256923,
    kids: [17259028, 17258582, 17258792, 17258618, 17259069, 17258445],
    score: 65,
    time: 1528386584,
    title: "Raising a Very Unusual Round of Funding and Open-Sourcing Our Docs",
    type: "story",
    url:
      "https://sparktoro.com/blog/raised-a-very-unusual-round-of-funding-were-open-sourcing-our-docs/"
  }
];

describe("ItemList", () => {
  test("should match snapshot", () => {
    const wrapper = shallow(
      <ItemList items={ITEMS} getItems={() => {}} activeItem={{}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
