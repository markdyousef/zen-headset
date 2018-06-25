const db = require("./mongodb");
const pocketItemsJson = require("./__mock__/pocket-list.json");

describe("System Test – mongodb", () => {
  test("should sync mongodb with pocket list", done => {
    db.syncPocketList(pocketItemsJson).then(res => {
      expect(res).toMatchObject({ok: 1});
      done();
    });
  });
});
