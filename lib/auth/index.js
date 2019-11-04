const request = require("request");

exports.getToken = function() {
  let _token, _expiration;
  const now = new Date();

  if (_token && now < _expiration) return Promise.resolve(_token);
  return authorize();

  function authorize() {
    const options = {
      method: "POST",
      url: "https://auth.emsicloud.com/connect/token",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      form: {
        client_id: process.env.EMSI_CLIENT_ID,
        client_secret: process.env.EMSI_SECRET,
        grant_type: "client_credentials",
        scope: process.env.EMSI_SCOPE
      }
    };

    return new Promise((resolve, reject) => {
      request(options, function(error, _, body) {
        if (error) reject(error);
        const bodyObject = JSON.parse(body);
        const t = new Date();
        _token = bodyObject.access_token;
        _expiration = t.setSeconds(t.getSeconds() + bodyObject.expires_in);
        resolve(_token);
      });
    });
  }
};
