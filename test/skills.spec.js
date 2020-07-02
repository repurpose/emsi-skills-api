const api = require("../index");

describe("skills", function () {
  it("fetches all skills", function (done) {
    api.skills
      .listAllSkills()
      .then((docs) => {
        expect(docs).to.be.ok;
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });

  it("fetches skills based on a search", function (done) {
    api.skills
      .searchSkills("c progra")
      .then((docs) => {
        expect(docs).to.be.ok;
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });

  it("fetches skills by type", function (done) {
    api.skills
      .skillsByType("c,h")
      .then((docs) => {
        expect(docs).to.be.ok;
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });

  it("fetches skill by id", function (done) {
    api.skills
      .skillById("KS1200364C9C1LK3V5Q1")
      .then((skill) => {
        expect(skill.name).to.equal("C (Programming Language)");
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });
});
