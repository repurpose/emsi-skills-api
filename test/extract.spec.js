const api = require("../index");

const sampleText =
  "... Great candidates also have\n\n Experience with a particular JS MV* framework (we happen to use React)\n Experience working with databases\n Experience with AWS\n Familiarity with microservice architecture\n Familiarity with modern CSS practices, e.g. LESS, SASS, CSS-in-JS ...";

describe("extract", function () {
  it("parses document text", function (done) {
    api.extract
      .extractFromDocument(sampleText)
      .then((docs) => {
        expect(docs).to.be.ok;
        expect(docs.skills).to.be.ok;
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });

  // TODO: Diagnose failing test
  it("parses document text with source data", function (done) {
    api.extract
      .extractFromDocumentWithSource(sampleText)
      .then((docs) => {
        expect(docs).to.be.ok;
        expect(docs.trace).to.be.ok;
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });
});
