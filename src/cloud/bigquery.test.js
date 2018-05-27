const BigQuery = require("@google-cloud/bigquery");
const { getDataset, getTable, getData } = require("./bigquery");
require('dotenv').config()

const { PROJECT_ID, DATASET_TEST, TABLE } = process.env;

describe("UNIT TEST - bigquery", () => {
  const bigquery = new BigQuery({ projectId: PROJECT_ID });
  let dataset;
  let table;
  let rows;
  test("getDataset(bigquery, id)", done => {
    getDataset(bigquery, DATASET_TEST).then(data => {
      dataset = data[0];
      expect(dataset.id).toBe(DATASET_TEST);
      done();
    });
  });
  test("getTable(dataset, id)", done => {
    getTable(dataset, TABLE).then(data => {
        table = data[0];
        expect(table.id).toBe(TABLE)
        done();
    });
  });
  test("getData(table, maxResults)", done => {
      getData(table, 100).then(data => {
          rows = data[0];
          expect(rows.length).toBe(100);
          done();
      })
  })
});
