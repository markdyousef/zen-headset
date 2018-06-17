const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const headsetData = require("./api/headset-data");
const discoverData = require("./api/discover-data");

// set environment variables
require("dotenv").config();
const port = process.env.PORT || 5000;
const { PROJECT_ID, DATASET_TEST, TABLE } = process.env;

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

app.use("/api/headset", headset);
app.use("/api/discover", discover);
exports.server = server.listen(port, () =>
  console.log(`Listeting on port ${port}`)
);
