const BigQuery = require("@google-cloud/bigquery");
const config = require("./config.json");
const { getDataset, getTable, saveData } = require("./utils");
const Buffer = require('safe-buffer').Buffer;

exports.saveHeadsetData = event => {
  // decode pub/sub trigger event
  const message = event.data;
  const data = JSON.parse(Buffer.from(message.data, 'base64').toString())
  return new Promise((resolve, reject) => {
    const bigquery = new BigQuery({ projectId: config.PROJECT_ID });
    getDataset(bigquery, config.DATASET_DEV)
      .then(dataset => getTable(dataset, config.TABLE))
      .then(table => saveData(table, data))
      .then(res => resolve("Success!"))
      .catch(err => reject(err));
  });
};
