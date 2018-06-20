import * as actions from "./collection-actions";
import constants from "../constants/collection-action-types";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import collectionListJson from "./__mockData__/collect-list.json";

// mock redux store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("UNIT TESTS – collection-actions", () => {
  test("set active item", () => {
    expect(actions.setActive("1234")).toMatchObject({
      type: constants.SET_ACTIVE,
      itemId: "1234"
    });
  });
});

/**
 * API Calls to /api/collect/*
 */
describe("INTEGRATION TESTS – collection.actions", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test("get request token from server", done => {
    fetch.mockResponseOnce(JSON.stringify({ token: "12345" }));

    // assert on the response
    actions.requestToken().then(token => {
      expect(token).toEqual("12345");
      done();
    });

    // assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual("/api/collect/request_token");
  });
  test("covert request to acces token via server", done => {
    const requestToken = "12345";
    fetch.mockResponseOnce(JSON.stringify({ token: "54321" }));
    // assert on the response
    actions.convertToken(requestToken).then(accessToken => {
      expect(accessToken).toEqual("54321");
      done();
    });

    // assert on the times and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      `/api/collect/access_token/${requestToken}`
    );
  });
  test("dispatches the correct actions and fetches collections from server", done => {
    fetch.mockResponseOnce(JSON.stringify(collectionListJson));

    const expectedActions = [
      {
        type: constants.REQUEST
      },
      {
        type: constants.RESPONSE
      }
    ];
    const store = mockStore({ items: [] });

    store.dispatch(actions.fetchData()).then(() => {
      const actions = store.getActions()
      expect(actions).toMatchObject(expectedActions);
      done();
    });
  });
});
