const { Dataset, Table } = require("@google-cloud/bigquery");

exports.getDataset = (bigquery, id) => {
  const dataset = new Dataset(bigquery, id);
  return dataset.get().then(data => data[0]);
};

exports.getTable = (dataset, id) => {
  const table = new Table(dataset, id);
  return table.get().then(data => data[0]);
};

exports.getData = (table, maxResults) => {
    return table.getRows({maxResults}).then(data => data[0]);
}