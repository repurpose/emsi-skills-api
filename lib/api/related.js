const { request } = require("../util/request");

exports.getRelated = async ({ ids, version = "latest" }) => {
  const { data } = await request({
    method: "POST",
    url: `https://emsiservices.com/skills/versions/${version}/related`,
    headers: { "content-type": "application/json" },
    body: { ids },
  });
  return data;
};
