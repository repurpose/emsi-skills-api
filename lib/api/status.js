const request = require("request");

exports.getStatus = () => {
  const options = { method: "GET", url: "https://skills.emsicloud.com/status" };

  return new Promise((resolve, reject) => {
    request(options, function (error, response) {
      if (error) reject(error);
      resolve(response.statusCode === 200);
    });
  });
};
