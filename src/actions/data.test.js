const { fetchData } = require("./data");
require("dotenv").config();
const { PROJECT_ID, DATASET_DEV, TABLE } = process.env;

describe("UNIT TEST - actions.data", () => {
  it("fetchData(projectId, datasetId, tableId, maxRows) should return [maxRows]", done => {
    fetchData(PROJECT_ID, DATASET_DEV, TABLE, 100).then(data => {
      expect(data.length).toBe(100);
      done();
    });
  });
});