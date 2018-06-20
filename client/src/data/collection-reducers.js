import constants from "../constants/collection-action-types";

export const itemReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/**
 * Collections Reducer
 */
export const initialState = {
  isLoading: false,
  items: [],
  activeItem: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST:
      return { ...state, isLoading: true };
    case constants.RESPONSE:
      return { ...state, isLoading: false, items: action.data };
    case constants.SET_ACTIVE: {
      const itemState = state.items.find(obj => obj.item_id == action.itemId);
      return { ...state, activeItem: itemReducer(itemState, action) };
    }
    default:
      return state;
  }
};
