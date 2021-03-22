const { expect } = require("chai");
const api = require("../index");

const sampleText =
  "... Great candidates also have\n\n Experience with a particular JS MV* framework (we happen to use React)\n Experience working with databases\n Experience with AWS\n Familiarity with microservice architecture\n Familiarity with modern CSS practices, e.g. LESS, SASS, CSS-in-JS ...";

describe("extract", function () {
  it("parses document text", async function () {
    const docs = await api.extract.extractFromDocument({
      documentText: sampleText,
    });
    expect(docs.data).to.be.an("array");
    expect(docs.data[0].confidence).to.be.a("number");
    expect(docs.data[0].skill).to.have.all.keys(
      "id",
      "infoUrl",
      "name",
      "tags",
      "type"
    );
  });

  // TODO: Diagnose failing test
  it("parses document text with source data", async function () {
    const docs = await api.extract.extractFromDocumentWithSource({
      documentText: sampleText,
    });
    expect(docs.data.skills).to.be.an("array");
    expect(docs.data.trace).to.be.an("array");
  });
});
