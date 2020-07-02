const api = require("../index");

describe("versions", function () {
  it("reports the available versions", function (done) {
    api.versions
      .listVersions()
      .then((status) => {
        expect(status).to.be.ok;
        expect(Array.isArray(status)).to.equal(true);
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });
});
