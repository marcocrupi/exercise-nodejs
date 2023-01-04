const supertest = require("supertest");

const createApp = require("./app");

const app = createApp();

const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", "text/html");

  expect(response.body).toEqual(`
<html>
  <head>
    <title>Welcome to the World Wide Web!</title>
  </head>
  <body>
    <p>Welcome to the World Wide Web!</p>
  </body>
</html>
`);
});
