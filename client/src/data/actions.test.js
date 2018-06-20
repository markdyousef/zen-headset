import actions, { request, response } from "./actions";

describe("UNIT TEST– data.actions", () => {
  test("request(type)", () => {
    expect(request("REQUEST")).toMatchObject({ type: "REQUEST" });
  });
  test("response(type, data)", () => {
    const data = { message: "hello" };
    expect(response("RESPONSE", data)).toMatchObject({
      type: "RESPONSE",
      data
    });
  });
});
