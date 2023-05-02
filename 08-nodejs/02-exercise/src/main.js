import express from "express";
const webServer = express();
const hostname = "127.0.0.1";
const port = 3001;
// code down below

const htmlCode = `
<!DOCTYPE html>
<html>
  <head>
    <title>My Image</title>
  </head>
  <body>
    <h1>My Image</h1>
    <img src="https://www.example.com/image.jpg" alt="My Image">
    <h1>Form Example</h1>
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password"><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
`;

webServer.get("/", (request, response) => {
  response.send(htmlCode);
});

webServer.get("/news", (request, response) => {
  const array = [];
  const news1 = {
    name: "news 1",
    detail: "detail 1",
  };
  const news2 = {
    name: "news 2",
    detail: "detail 2",
  };
  const news3 = {
    name: "news 3",
    detail: "detail 3",
  };
  array.push(news1);
  array.push(news2);
  array.push(news3);
  response.json(array);
});

webServer.get("/users", (request, response) => {
  const result = [
    { userId: "mock-id-1" },
    { name: "mock-id-2" },
    { name: "mock-id-3" },
  ];
  response.json(result);
});

webServer.get("/me", (request, response) => {
  response.json({
    name: "mock-name",
    role: "user",
    picture: "https://shorturl.at/qtFJM",
  });
});

webServer.get("/health-check", (request, response) => {
  response.send("Server is fine!");
});

webServer.listen(port, hostname, () => {
  console.log(`Server is run on http://${hostname}:${port}`);
});
