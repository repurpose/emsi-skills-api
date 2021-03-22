const request = require("request");
const { getToken } = require("../auth");

exports.request = async function ({
  method = "GET",
  url,
  qs,
  headers = {},
  body,
  authenticated = true,
  parseJSON = true,
}) {
  if (authenticated) {
    const token = await getToken();
    headers.authorization = `Bearer ${token}`;
  }

  const options = {
    method,
    url,
    qs,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  return new Promise((resolve, reject) => {
    request(options, function (error, _, body) {
      if (error) reject(error);

      try {
        if (parseJSON) {
          JSON.parse(body);
        }
      } catch (e) {
        console.error(e);
        console.log(body);
      }

      if (parseJSON) {
        resolve(JSON.parse(body));
      } else {
        resolve(body);
      }
    });
  });
};
