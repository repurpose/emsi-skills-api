const { request } = require("../util/request");

exports.getMeta = async () => {
  const { data } = await request({
    url: "https://emsiservices.com/skills/meta",
  });
  return data;
};
