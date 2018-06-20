import discoverReducer, {
  itemReducer,
  initialItemState,
  initialState
} from "./discover-reducers";
import * as actions from "./actions";
import constants from "../constants/discover-action-types";

describe("UNIT TESTS – itemReducer", () => {
  test("request save item", () => {
    const nextState = itemReducer(
      initialItemState,
      actions.request(constants.ITEM.REQUEST_SAVE)
    );
    expect(nextState).toMatchObject({ ...initialItemState, isLoading: true });
  });
  test("response save item", () => {
    const nextState = itemReducer(
      initialItemState,
      actions.response(constants.ITEM.RESPONSE_SAVE)
    );
    expect(nextState).toMatchObject({
      ...initialItemState,
      isSaved: true,
      message: "Saved!"
    });
  });
});

describe("UNIT TESTS – discoverReducer", () => {
  test("request get items", () => {
    const nextState = discoverReducer(
      initialState,
      actions.request(constants.REQUEST)
    );
    expect(nextState).toMatchObject({ ...initialState, isLoading: true });
  });
  test("response get items", () => {
    const items = [{ id: "123" }];
    const nextState = discoverReducer(
      initialState,
      actions.response(constants.RESPONSE, items)
    );
    expect(nextState).toMatchObject({
      ...initialState,
      isLoading: false,
      items
    });
  });
  test("request save item", () => {
    const nextState = discoverReducer(
      initialState,
      actions.request(constants.ITEM.REQUEST_SAVE)
    );
    expect(nextState).toMatchObject({
      ...initialState,
      activeItem: { isLoading: true }
    });
  });
  test("response save item", () => {
    const nextState = discoverReducer(
      initialState,
      actions.response(constants.ITEM.RESPONSE_SAVE)
    );
    expect(nextState).toMatchObject({
      ...initialState,
      activeItem: {
        isSaved: true,
        isLoading: false,
        message: "Saved!"
      }
    });
  });
  const initialStateWithItems = {
    ...initialState,
    items: [{ id: "1" }, { id: "2" }, { id: "3" }]
  };
  test("remove item from list", () => {
    const id = "1";
    const nextState = discoverReducer(initialStateWithItems, {
      type: constants.REMOVE_ITEM,
      id
    });
    expect(nextState).toMatchObject({
      ...initialStateWithItems,
      items: initialStateWithItems.items.filter(item => item.id !== id)
    });
  });
  test("expand item in list", () => {
    const id = "1";
    const nextState = discoverReducer(initialStateWithItems, {
      type: constants.EXPAND_ITEM,
      id
    });
    expect(nextState).toMatchObject({
      ...initialStateWithItems,
      expandedItem: id
    });
  });
});
