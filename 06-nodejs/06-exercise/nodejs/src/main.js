import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

// code here.
const company = [
  {
    companyId: "comp-01",
    name: "Mock Company 01",
    taxId: "tax-000",
    employees: [],
  },
];

webServer.get("/", (request, response) => {
  response.send("Hello World");
});

webServer.get("/company", (request, response) => {
  response.json(company);
});

webServer.post("/company", (request, response) => {
  const name = request.body.name;
  const taxId = request.body.taxId;
  const companyId = company.length + 1;
  const employees = [];
  company.push({ companyId, name, taxId, employees });
  response.send("Create Company Success");
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
