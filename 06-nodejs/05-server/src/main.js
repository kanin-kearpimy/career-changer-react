import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

const users = [
  { userId: "mock-id-1", name: "mock user 1", age: 18 },
  { userId: "mock-id-2", name: "mock user 2", age: 22 },
];

webServer.get("/", (request, response) => {
  response.send("Hello World");
});

webServer.get("/users", (request, response) => {
  response.json(users);
});

webServer.post("/users", (request, response) => {
  const name = request.body.name;
  const age = request.body.age;
  const userId = `mock-id-${users.length + 1}`;
  users.push({ name, age, userId });
  response.send("Create User Success");
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
