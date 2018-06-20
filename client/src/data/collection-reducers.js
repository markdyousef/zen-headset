import constants from "../constants/collection-action-types";

const item = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/**
 * Collections Reducer
 */
const initialState = {
  isLoading: false,
  items: [],
  activeItem: {}
};

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case constants.REQUEST:
      return { ...state, isLoading: true };
    case constants.RESPONSE:
      return { ...state, isLoading: false, items: action.data };
    case constants.SET_ACTIVE: {
      const itemState = state.items.find(obj => obj.item_id == action.itemId);
      return { ...state, activeItem: item(itemState, action) };
    }
    default:
      return state;
  }
};
