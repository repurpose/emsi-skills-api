const api = require("../index");

describe("versions", function () {
  it("reports list of data versions", async function () {
    const versions = await api.versions.getVersions();
    expect(versions).to.be.an("array");
  });

  it("returns metadata for a specified version", async function () {
    const version = await api.versions.getVersionMetadata({
      version: "latest",
    });
    expect(version).to.have.all.keys(
      "version",
      "skillCount",
      "removedSkillCount",
      "types",
      "fields"
    );
  });
});
