const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const headsetData = require("./src/actions/headsetData");
const discoverData = require("./src/actions/discoverData");

require("dotenv").config();
const port = process.env.PORT || 5000;
const { PROJECT_ID, DATASET_TEST, TABLE } = process.env;

app.get("/api/headset/", (req, res) => {
  headsetData
    .fetchData(PROJECT_ID, DATASET_TEST, TABLE)
    .then(data => {
      res.json({ data });
    })
    .catch(err => res.json({ err }));
});

app.get("/api/discover/", (req, res) => {
  discoverData
    .fetchStories()
    .then(data => {
      res.json({ data });
    })
    .catch(err => res.json({ err }));
});

app.get("/api/discover/:storyId", (req, res) => {
  const storyId = req.params.storyId;
  console.log(storyId)
  // if (!storyId) return res.json({ message: "storyId required" });
  discoverData
    .fetchStoryHTML(storyId)
    .then(html => {
      res.send(html)
    })
    .catch(err => res.json(err));
});

exports.server = server.listen(port, () =>
  console.log(`Listeting on port ${port}`)
);
