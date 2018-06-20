import collectionReducer, {
  initialState,
  itemReducer
} from "./collection-reducers";
import * as actions from "./actions";
import constants from "../constants/collection-action-types";

describe("UNIT TESTS – collectionReducer", () => {
  test("request get collections", () => {
    const nextState = collectionReducer(
      initialState,
      actions.request(constants.REQUEST)
    );
    expect(nextState).toMatchObject({ ...initialState, isLoading: true });
  });
  test("response get collections", () => {
    const items = [{ id: "1234" }];
    const nextState = collectionReducer(
      initialState,
      actions.response(constants.RESPONSE, items)
    );
    expect(nextState).toMatchObject({
      ...initialState,
      isLoading: false,
      items
    });
  });
  const initialStateWithItems = {
    ...initialState,
    items: [{ item_id: "1" }, { item_id: "2" }]
  };
  test("set active item object", () => {
    const itemId = "1";
    const nextState = collectionReducer(initialStateWithItems, {
      type: constants.SET_ACTIVE,
      itemId
    });
    expect(nextState).toMatchObject({
      ...initialStateWithItems,
      activeItem: initialStateWithItems.items.find(
        item => item.item_id == itemId
      )
    });
  });
});
