import * as actions from "./discover-actions";
import constants from "../constants/discover-action-types";
import discoverListJson from "./__mockData__/discover-list.json";
import saveItemJson from "./__mockData__/save-item-res.json";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

// mock redux store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
});

/**
 * API Calls to /api/discover/*
 */
describe("INTEGRATION TESTS – discover-actions", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test("dispatches the correct actions and gets X topstories from server", done => {
    fetch.mockResponseOnce(JSON.stringify(discoverListJson));

    const expectedActions = [
      {
        type: constants.REQUEST
      },
      {
        type: constants.RESPONSE,
        data: discoverListJson.data
      }
    ];
    const store = mockStore({ items: [] });

    store.dispatch(actions.fetchStories()).then(() => {
      const actions = store.getActions();
      expect(actions).toMatchObject(expectedActions);
      done();
    });
  });
  test("dispatches the correct actions and saves item to Read Later", done => {
    fetch.mockResponseOnce(JSON.stringify(saveItemJson));
    const item = {
      id: "2189758088",
      url: "https://posthook.io"
    }
    const expectedActions = [
      {
        type: constants.ITEM.REQUEST_SAVE
      },
      {
        type: constants.ITEM.RESPONSE_SAVE,
        data: saveItemJson
      }
    ]
    const store = mockStore({});
    store.dispatch(actions.saveItem(item)).then(() => {
      const actions = store.getActions()
      expect(actions).toMatchObject(expectedActions);
      done();
    })
  });
});
