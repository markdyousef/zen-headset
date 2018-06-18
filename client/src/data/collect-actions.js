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

export const fetchData = async () => {
  const accessToken = localStorage.getItem("access_token");
  const res = await fetch(`api/collect/list/${accessToken}`);
  const data = await res.json();
  return data;
};

export const saveItem = async (title, url) => {
  const accessToken = localStorage.getItem("access_token");
  const res = await fetch("api/collect/list", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ title, url, accessToken })
  });
  const data = await res.json();
  console.log(data);
  return data;
};
