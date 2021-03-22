const api = require("../index");

describe("meta", function () {
  it("reports api metadata", async function () {
    const meta = await api.meta.getMeta();
    expect(meta).to.have.all.keys("attribution", "latestVersion");
  });
});
