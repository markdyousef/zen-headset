const { requestToken, redirectAuth } = require("./collect-pocket-integration");

const SAMPLE_TOKEN = "4dcf347e-f4fb-d3ce-fd37-bec195"
describe("UNIT TEST - api.collect-pocket-integration", () => {
  _requestToken = null;
  test("requestToken()", done => {
    requestToken().then(res => {
      _requestToken = res;
      expect(res).toHaveLength(SAMPLE_TOKEN.length)
      done();
    });
  });
  test("redirectAuth(requestToken)", done => {
    redirectAuth(_requestToken).then(htmlPage => {
      expect(htmlPage).toBeDefined()
      done()
    })
  })
});
