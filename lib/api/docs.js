const request = require("request");

exports.getDocs = () => {
  const options = { method: "GET", url: "https://skills.emsicloud.com/docs" };

  return new Promise((resolve, reject) => {
    request(options, function (error, _, body) {
      if (error) reject(error);
      resolve(body);
    });
  });
};

exports.getChangelog = () => {
  const options = {
    method: "GET",
    url: "https://skills.emsicloud.com/docs/changelog",
  };

  return new Promise((resolve, reject) => {
    request(options, function (error, _, body) {
      if (error) reject(error);
      resolve(body);
    });
  });
};
