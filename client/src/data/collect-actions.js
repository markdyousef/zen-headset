/**
 * Pocket Integration
 */

// get request token
export const requestToken = async () => {
  const res = await fetch("api/collect/request_token");
  const data = await res.json();

  return data.token;
};

// convert requestToken to accessToken
export const convertToken = async requestToken => {
  const res = await fetch(`api/collect/access_token/${requestToken}`);
  const data = await res.json();

  return data.token;
};
