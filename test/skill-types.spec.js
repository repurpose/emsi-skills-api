const api = require("../index");

describe("skill types", function () {
  it("fetches skill types", function (done) {
    api.skillTypes
      .listSkillTypes()
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
