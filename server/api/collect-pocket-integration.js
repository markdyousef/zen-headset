const fetch = require("node-fetch");

const CONSUMER_KEY = "77971-769a3aeb9fa7c467203a8474";
const URI = "www.google.com";

// 1. Obtain a request token
const requestToken = (consumerKey = CONSUMER_KEY, redirectUri = URI) => {
  const data = {
    consumer_key: consumerKey,
    redirect_uri: redirectUri
  };
  return fetch("https://getpocket.com/v3/oauth/request", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.text())
    .then(data => data.slice(5)) // remove "code="
    .catch(err => console.log(err));
};

exports.requestToken = requestToken;

// 2. Redirect user to Pocket to continue authorization
// TODO: automate/ test with headless chrome browser??
const redirectAuth = (requestToken, redirectUri = URI) => {
  return fetch(
    `https://getpocket.com/auth/authorize?request_token=${requestToken}&redirect_uri=${redirectUri}`
  )
    .then(res => res.text())
    .catch(err => console.log(err));
};

exports.redirectAuth = redirectAuth;

// 3. Convert a request token into a Pocket access token
const convertToken = (consumerKey = CONSUMER_KEY, token) => {
  const data = {
    consumer_key: consumerKey,
    code: token
  };
  return fetch("https://getpocket.com/v3/oauth/authorize", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .catch(err => console.log(err));
};

exports.convertToken = convertToken;
