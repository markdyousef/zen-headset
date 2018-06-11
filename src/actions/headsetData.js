const BigQuery = require("@google-cloud/bigquery");
const cloud = require("../cloud/bigquery");

exports.fetchData = async (projectId, datasetId, tableId, maxResults) => {
  const bigquery = new BigQuery({ projectId: projectId });
  const dataset = await cloud.getDataset(bigquery, datasetId);
  const table = await cloud.getTable(dataset, tableId);
  const data = await cloud.getData(table, maxResults);
  return data;
};
