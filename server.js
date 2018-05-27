const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const data = require("./src/actions/data");

require("dotenv").config();
const port = process.env.PORT || 5000;
const { PROJECT_ID, DATASET_TEST, TABLE } = process.env;

app.get("/api", (req, res) => {
  data
    .fetchData(PROJECT_ID, DATASET_TEST, TABLE)
    .then(data => {
      res.json({ data });
    })
    .catch(err => res.json({ err }));
});

exports.server = server.listen(port, () =>
  console.log(`Listeting on port ${port}`)
);
