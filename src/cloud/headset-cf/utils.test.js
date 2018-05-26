const BigQuery = require("@google-cloud/bigquery");
const { getDataset, getTable, saveData } = require("./utils");
const config = require("./config.json");
const sampleData = require("./test-data.json");

describe("UNIT TEST - saveHeadsetData", () => {
  const bigquery = new BigQuery({
    projectId: config.PROJECT_ID
  });
  let _dataset;
  let _table;
  test("getDataset(bigquery, id)", done => {
    getDataset(bigquery, config.DATASET_TEST).then(dataset => {
      expect(dataset.id).toBe(config.DATASET_TEST);
      _dataset = dataset;
      done();
    });
  });
  test("getTable(dataset, id)", done => {
    getTable(_dataset, config.TABLE).then(table => {
      expect(table.id).toBe(config.TABLE);
      _table = table;
      done();
    });
  });
  test('saveData(table, data)', done => {
    saveData(_table, sampleData).then(res => {
      expect(res.kind).toBe("bigquery#tableDataInsertAllResponse");
      done();
    })
  })
});
