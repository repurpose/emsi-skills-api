const api = require("../index");

describe("status", function () {
  it("reports the status", async function () {
    const status = await api.status.getStatus();
    expect(status).to.equal(true);
  });
});
