const { request } = require("../util/request");

exports.getVersions = async () => {
  const { data } = await request({
    url: "https://emsiservices.com/skills/versions",
  });
  return data;
};

exports.getVersionMetadata = async ({ version = "latest" } = {}) => {
  const { data } = await request({
    url: `https://emsiservices.com/skills/versions/${version}`,
  });
  return data;
};
