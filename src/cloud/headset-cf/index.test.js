const { saveHeadsetData } = require("./index");
const dataSample = require("./test-data.json");
const config = require("./config.json");

describe("Integration Test", () => {
  test("savedHeadsetData(event)", done => {
    const data = JSON.stringify(dataSample);
    const event = {
      data: {
        data: Buffer.from(data).toString("base64")
      }
    };
    saveHeadsetData(event).then(res => {
      expect(res).toBe("Success!");
      done();
    });
  });
});
