const api = require("../index");

describe("status", function () {
  it("reports the status", function (done) {
    api.status
      .getStatus()
      .then((status) => {
        expect(status).to.equal(true);
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });
});
