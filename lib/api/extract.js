const { request } = require("../util/request");

exports.extractFromDocument = async ({ documentText, version = "latest" }) => {
  const url = `https://emsiservices.com/skills/versions/${version}/extract`;

  const body = await request({
    method: "POST",
    url,
    headers: { "content-type": "application/json" },
    body: { text: documentText },
  });

  return body;
};

exports.extractFromDocumentWithSource = async ({
  documentText,
  version = "latest",
}) => {
  const url = `https://emsiservices.com/skills/versions/${version}/extract/trace`;

  const body = await request({
    method: "POST",
    url,
    headers: { "content-type": "application/json" },
    body: { text: documentText },
  });

  return body;
};
