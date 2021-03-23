const { expect } = require("chai");
const api = require("../index");

describe("skills", function () {
  it("fetches all skills", async function () {
    const docs = await api.skills.listAllSkills();
    expect(docs).to.be.an("array");
    expect(docs[0]).to.have.all.keys("id", "infoUrl", "name", "type");
  });

  it("fetches skills based on a search", async function () {
    const docs = await api.skills.searchSkills({ term: "c progra" });
    expect(docs).to.be.an("array");
    expect(docs[0]).to.have.all.keys("id", "infoUrl", "name", "type");
  });

  it("fetches skills by type", async function () {
    const docs = await api.skills.skillsByType({ typeIds: "ST1,ST2" });
    expect(docs).to.be.an("array");
    expect(docs[0]).to.have.all.keys("id", "infoUrl", "name", "type");
  });

  it("fetches skill by id", async function () {
    const skill = await api.skills.skillById({
      skillId: "KS1200364C9C1LK3V5Q1",
    });
    expect(skill).to.have.all.keys(
      "id",
      "infoUrl",
      "name",
      "removedDescription",
      "tags",
      "type"
    );
    expect(skill.name).to.equal("C (Programming Language)");
  });

  it("fetches related skills", function (done) {
    api.skills
      .relatedSkills(["KS1200364C9C1LK3V5Q1"])
      .then(response => {
        expect(response).to.be.ok;
        return done();
      })
      .catch((error) => {
        expect(error).to.not.be.ok;
        return done();
      });
  });
});
