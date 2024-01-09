import express from "express";
const webServer = express();

webServer.get("/", (request, response) => {
  response.send("This is main route!");
});

webServer.get("/admin", (request, response) => {
  response.send("This is admin route!");
});

webServer.get("/user", (request, response) => {
  const object = {
    name: "james",
    number: 61,
  };

  response.send(object);
});

webServer.listen(3001, "127.0.0.1", () => {
  console.log("Server is up Yay!!!!");
});
