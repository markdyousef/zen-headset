import constants from "../constants/discover-action-types";
import { request, response, setState } from "./actions";
/**
 * Retrieve
 */

// get top stories
export const fetchStories = (
  type = "topstories",
  count = 10
) => async dispatch => {
  dispatch(request(constants.REQUEST));
  const res = await fetch("/api/discover");
  const stories = await res.json();
  dispatch(response(constants.RESPONSE, stories.data));
};

/**
 * Add
 */

// save HackerNews story to Pocket
export const saveItem = item => async dispatch => {
  const { title, url } = item;
  dispatch(request(constants.ITEM.REQUEST_SAVE));
  const accessToken = localStorage.getItem("access_token");
  const res = await fetch("/api/collect/list", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ title, url, accessToken })
  });
  const data = await res.json();
  dispatch(response(constants.ITEM.RESPONSE_SAVE, data));
};

/**
 * UI
 */

// remove item from list
export const removeItem = id => ({
  type: constants.REMOVE_ITEM,
  id
});

// expand list item
export const expandItem = id => ({
  type: constants.EXPAND_ITEM,
  id
});
