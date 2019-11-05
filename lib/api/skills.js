const request = require("request");
const { getToken } = require("../auth");

exports.listAllSkills = async (version = "latest") => {
  const token = await getToken();
  const options = {
    method: "GET",
    url: `https://skills.emsicloud.com/versions/${version}/skills`,
    headers: { authorization: `Bearer ${token}` }
  };

  return new Promise((resolve, reject) => {
    request(options, function(error, _, body) {
      if (error) reject(error);
      const parsedBody = JSON.parse(body);
      resolve(parsedBody.skills);
    });
  });
};

exports.searchSkills = async (term, version = "latest") => {
  const token = await getToken();
  const options = {
    method: "GET",
    url: `https://skills.emsicloud.com/versions/${version}/skills`,
    qs: { q: term },
    headers: { authorization: `Bearer ${token}` }
  };

  return new Promise((resolve, reject) => {
    request(options, function(error, _, body) {
      if (error) reject(error);
      const parsedBody = JSON.parse(body);
      resolve(parsedBody.skills);
    });
  });
};

exports.skillsByType = async (typeId, version = "latest") => {
  const token = await getToken();
  const options = {
    method: "GET",
    url: `https://skills.emsicloud.com/versions/${version}/skills`,
    qs: { typeId },
    headers: { authorization: `Bearer ${token}` }
  };

  return new Promise((resolve, reject) => {
    request(options, function(error, _, body) {
      if (error) reject(error);
      const parsedBody = JSON.parse(body);
      resolve(parsedBody.skills);
    });
  });
};

exports.skillById = async (skillId, version = "latest") => {
  const token = await getToken();
  const options = {
    method: "GET",
    url: `https://skills.emsicloud.com/versions/${version}/skills/${skillId}`,
    headers: { authorization: `Bearer ${token}` }
  };

  return new Promise((resolve, reject) => {
    request(options, function(error, _, body) {
      if (error) reject(error);
      resolve(JSON.parse(body));
    });
  });
};
