const { Dataset, Table } = require("@google-cloud/bigquery");

exports.getDataset = (bigquery, id) => {
  const dataset = new Dataset(bigquery, id);
  return dataset.get();
};

exports.getTable = (dataset, id) => {
  const table = new Table(dataset, id);
  return table.get();
};

exports.getData = (table, maxResults) => {
    return table.getRows({maxResults});
}