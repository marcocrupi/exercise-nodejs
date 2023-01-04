const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    const htmlResponseBody = `
<html>
  <head>
    <title>Welcome to the World Wide Web!</title>
  </head>
  <body>
    <p>Welcome to the World Wide Web!</p>
  </body>
</html>
`;

    response.end(htmlResponseBody);
  });
}

module.exports = createApp;
