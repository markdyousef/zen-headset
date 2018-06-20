import * as actions from "./discover-actions";
import constants from "../constants/discover-action-types";

// https://www.npmjs.com/package/jest-fetch-mock
describe("UNIT TESTS – discover-actions", () => {
  test("remove item from list", () => {
    expect(actions.removeItem("1234")).toMatchObject({
      type: constants.REMOVE_ITEM,
      id: "1234"
    });
  });
  test("expand list item", () => {
    expect(actions.expandItem("1234")).toMatchObject({
      type: constants.EXPAND_ITEM,
      id: "1234"
    });
  });
  test("get X topstories from server", done => {
    actions.fetchStories().then(stories => {
      expect(stories.length).toBe(10);
      done();
    });
  });
  test("save item to Read Later", done => {
      const item = {title: "hello", url: "www.google.com"}
      actions.saveItem(item).then(res => {
          expect(res).toBeDefined( )
      })
  })
});
