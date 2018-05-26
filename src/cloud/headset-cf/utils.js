const {Dataset, Table} = require("@google-cloud/bigquery");
const Storage = require("@google-cloud/storage");
const config = require("./config.json");
const schema = require("./table-schema.json");

exports.getDataset = (bigquery, id) => {
  const dataset = new Dataset(bigquery, id);
  return dataset.get({autoCreate: true})
    .then(data => {
      const dataset = data[0];
      return dataset;
    })
    .catch(err => console.log(err))
}

exports.getTable = (dataset, id) => {
  const table = new Table(dataset, id);
  return table.get({schema, autoCreate:true})
    .then(data => {
      const table = data[0];
      return table;
    })
    .catch(err => console.log(err));
};

exports.saveData = (table, data) => {
  return table.insert(data)
    .then(data => {
      const res = data[0];
      return res;
    })
    .catch(err => err);
};
