import constants from "../constants/collection-action-types";
import {request, response} from "./actions";

/**
 * Authentication
 */

// get request token
export const requestToken = async () => {
  const res = await fetch("/api/collect/request_token");
  const data = await res.json();

  return data.token;
};

// convert requestToken to accessToken
export const convertToken = async token => {
  const res = await fetch(`/api/collect/access_token/${token}`);
  const data = await res.json();
  return data.token;
};

/**
 * Retrieve
 */

// fetch items
export const fetchData = () => async dispatch => {
  // get access token from localstorage
  const accessToken = localStorage.getItem("access_token");
  dispatch(request(constants.COLLECTIONS_REQUEST));

  // get collections from server
  const res = await fetch(`/api/collect/list/${accessToken}`);
  const data = await res.json();

  // parse the returned list of items
  const keys = Object.keys(data.list);
  const items = keys.map(key => data.list[key]);
  dispatch(response(constants.COLLECTIONS_RESPONSE, items));
};

/**
 * Add
 */
export const saveItem = async (title, url) => {
  const accessToken = localStorage.getItem("access_token");
  const res = await fetch("/api/collect/list", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ title, url, accessToken })
  });
  const data = await res.json();
  return data;
};
