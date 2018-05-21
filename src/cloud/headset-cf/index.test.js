const { saveHeadsetData } = require("./index");
const dataSample = require('./test-data.json');

test("saveHeadsetData", () => {
  // initialize mock
  const event = {
    data: {
      data: new Buffer(JSON.stringify(dataSample))
    }
  };
  saveHeadsetData(event, (err, res) => {
    expect(res).toEqual(dataSample);
  });
});
