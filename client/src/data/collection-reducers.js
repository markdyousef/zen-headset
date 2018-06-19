import constants from "../constants/collection-action-types";

const initialState = {
  isLoading: false,
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.COLLECTIONS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case constants.COLLECTIONS_RESPONSE: {
      return { ...state, isLoading: false, items: action.data };
    }
  }
  return state;
};
