const { expect } = require("chai");
const api = require("../index");

describe("related", function () {
  it("fetches related skills", async function () {
    const docs = await api.related.getRelated({
      ids: [
        "KS1200364C9C1LK3V5Q1",
        "KS1275N74XZ574T7N47D",
        "KS125QD6K0QLLKCTPJQ0",
      ],
    });
    expect(docs).to.be.an("array");
    expect(docs[0]).to.have.all.keys("id", "infoUrl", "name", "type");
  });
});
