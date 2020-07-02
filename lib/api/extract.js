const request = require("request");
const { getToken } = require("../auth");

exports.extractFromDocument = async (documentText, version = "latest") => {
  const token = await getToken();
  const options = {
    method: "POST",
    url: `https://skills.emsicloud.com/versions/${version}/extract`,
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ full_text: documentText }),
  };

  return new Promise((resolve, reject) => {
    request(options, function (error, _, body) {
      if (error) reject(error);
      resolve(JSON.parse(body));
    });
  });
};

exports.extractFromDocumentWithSource = async (
  documentText,
  version = "latest"
) => {
  const token = await getToken();
  const options = {
    method: "POST",
    url: `https://skills.emsicloud.com/versions/${version}/extract?trace=true`,
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ full_text: documentText }),
  };

  return new Promise((resolve, reject) => {
    request(options, function (error, _, body) {
      if (error) reject(error);
      resolve(JSON.parse(body));
    });
  });
};
