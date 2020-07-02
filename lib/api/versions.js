const request = require("request");
const { getToken } = require("../auth");

exports.listVersions = async () => {
  const token = await getToken();
  const options = {
    method: "GET",
    url: "https://skills.emsicloud.com/versions",
    headers: { authorization: `Bearer ${token}` },
  };

  return new Promise((resolve, reject) => {
    request(options, function (error, _, body) {
      if (error) reject(error);
      resolve(JSON.parse(body));
    });
  });
};
