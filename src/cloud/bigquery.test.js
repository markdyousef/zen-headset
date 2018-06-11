const BigQuery = require("@google-cloud/bigquery");
const { getDataset, getTable, getData } = require("./bigquery");
require("dotenv").config();

const { PROJECT_ID, DATASET_TEST, TABLE } = process.env;

describe("UNIT TEST - bigquery", () => {
  const bigquery = new BigQuery({ projectId: PROJECT_ID });
  let _dataset;
  let _table;
  let _rows;
  test("getDataset(bigquery, id)", done => {
    getDataset(bigquery, DATASET_TEST).then(dataset => {
      expect(dataset.id).toBe(DATASET_TEST);
      _dataset = dataset;
      done();
    });
  });
  test("getTable(dataset, id)", done => {
    getTable(_dataset, TABLE).then(table => {
      expect(table.id).toBe(TABLE);
      _table = table;
      done();
    });
  });
  test("getData(table, maxResults)", done => {
    getData(_table, 100).then(rows => {
      expect(rows.length).toBe(100);
      _rows = rows;
      done();
    });
  });
});
