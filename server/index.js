const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    address: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 25,
    address: "456 Elm St, Othertown, USA",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 35,
    address: "789 Oak St, Anycity, USA",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob@example.com",
    age: 40,
    address: "101 Pine St, Someville, USA",
  },
  {
    id: 5,
    name: "Emily Davis",
    email: "emily@example.com",
    age: 28,
    address: "202 Maple St, Newcity, USA",
  },
];

const villas = require("./luxury.json");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("User Management System is running");
});

app.get("/data", (req, res) => {
  res.send("Data Coming");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/villas", (req, res) => {
  res.send(villas);
});

app.get("/villas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const villa = villas.find((villa) => villa.id === id) || {};
  res.send(villa);
});

// Server Listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
