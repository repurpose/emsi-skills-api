const api = require("../index");

describe("docs", function () {
  it("fetches the docs", function (done) {
    api.docs
      .getDocs()
      .then((docs) => {
        expect(docs).to.be.ok;
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });

  it("fetches the changelog", function (done) {
    api.docs
      .getChangelog()
      .then((docs) => {
        expect(docs).to.be.ok;
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });
});
