const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const headsetData = require("./api/headset-data");
const discoverData = require("./api/discover-data");
const collectPocket = require("./api/collect-pocket-integration");

// set environment variables
require("dotenv").config();
const port = process.env.PORT || 5000;
const { PROJECT_ID, DATASET_TEST, TABLE } = process.env;

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
/**
 * Headset API
 */
const headset = express();
headset.get("/", (req, res) => {
  headsetData
    .fetchData(PROJECT_ID, DATASET_TEST, TABLE)
    .then(data => {
      res.json({ data });
    })
    .catch(err => res.json({ err }));
});

/**
 * Discover API
 */
const discover = express();
discover.get("/", (req, res) => {
  discoverData
    .fetchStories()
    .then(data => {
      res.json({ data });
    })
    .catch(err => res.json({ err }));
});
discover.get("/:storyId", (req, res) => {
  const storyId = req.params.storyId;
  discoverData
    .fetchStoryHTML(storyId)
    .then(html => {
      res.send(html);
    })
    .catch(err => res.json(err));
});

/**
 * Collect API
 */
const collect = express();
collect.get("/list/:accessToken", (req, res) => {
  const accessToken = req.params.accessToken;
  collectPocket
    .getData(accessToken)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
collect.post("/list", (req, res) => {
  const { title, url, accessToken } = req.body; 
  collectPocket
    .saveItem(accessToken, title, url)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
collect.get("/request_token", (req, res) => {
  collectPocket
    .requestToken()
    .then(token => res.json({ token }))
    .catch(err => res.json(err));
});
collect.get("/access_token/:requestToken", (req, res) => {
  const requestToken = req.params.requestToken;
  collectPocket
    .convertToken(requestToken)
    .then(token => res.json({token}))
    .catch(err => res.json({ err }));
});

app.use("/api/headset", headset);
app.use("/api/discover", discover);
app.use("/api/collect", collect);
exports.server = server.listen(port, () =>
  console.log(`Listeting on port ${port}`)
);
