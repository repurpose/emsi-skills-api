const { request } = require("../util/request");

exports.listAllSkills = async ({ version = "latest" } = {}) => {
  const url = `https://emsiservices.com/skills/versions/${version}/skills`;

  const { data } = await request({ url });
  return data;
};

exports.searchSkills = async ({ term, version = "latest" }) => {
  const url = `https://emsiservices.com/skills/versions/${version}/skills`;
  const qs = { q: term };

  const { data } = await request({ url, qs });
  return data;
};

exports.skillsByType = async ({ typeIds, version = "latest" }) => {
  const url = `https://emsiservices.com/skills/versions/${version}/skills`;
  const qs = { typeIds };

  const { data } = await request({ url, qs });
  return data;
};

exports.skillById = async ({ skillId, version = "latest" }) => {
  const url = `https://emsiservices.com/skills/versions/${version}/skills/${skillId}`;

  const { data } = await request({ url });
  return data;
};

exports.relatedSkills = async (skillIds, version = "latest") => {
  const token = await getToken();
  const options = {
    method: "POST",
    url: `https://skills.emsicloud.com/versions/${version}/related`,
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json"
    },
    body: { ids: skillIds },
    json: true
  };

  return new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      if (error) {
        reject(error);
      }
      resolve(JSON.parse(body));
    });
  });
};
