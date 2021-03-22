const { request } = require("../util/request");

exports.getStatus = async () => {
  const {
    data: { healthy },
  } = await request({ url: "https://emsiservices.com/skills/status" });
  return healthy;
};
