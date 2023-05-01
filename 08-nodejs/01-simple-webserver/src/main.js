import express from "express";
const webServer = express();
const port = 3000;
const ipAddress = "127.0.0.1";

webServer.get("/", (req, res) => {
  res.send("This is / route");
});

webServer.get("/admin", (request, response) => {
  res.send("This is /admin route");
});

webServer.get("/user", (request, response) => {
  response.send("This is /user route");
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
