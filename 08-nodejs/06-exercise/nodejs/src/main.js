import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

const company = [];

webServer.get("/", (request, response) => {
  response.send("Hello World");
});

// code down below.
