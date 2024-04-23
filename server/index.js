const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db("userDB").collection("users");

    app.get("/", (req, res) => {
      res.send("User Management System is running");
    });

    app.get("/users", async (req, res) => {
      try {
        const user = await database.find({}).toArray();
        res.json(user);
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.post("/users", async (req, res) => {
      try {
        const newUser = req.body;
        console.log(newUser);
        const result = await database.insertOne(newUser);
        if (result.insertedCount === 1) {
          res.status(201).json(newUser);
        } else {
          console.error(
            "Error creating user: No data returned from MongoDB insert operation."
          );
          res.status(500).json({ error: "Internal Server Error" });
        }
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } finally {
    // Ensure to close the connection when done
    // await client.close();
  }
}

run().catch(console.error);

// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");

// // Load environment variables from .env file
// dotenv.config();

// const users = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john@example.com",
//     age: 30,
//     address: "123 Main St, Anytown, USA",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "jane@example.com",
//     age: 25,
//     address: "456 Elm St, Othertown, USA",
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     email: "alice@example.com",
//     age: 35,
//     address: "789 Oak St, Anycity, USA",
//   },
//   {
//     id: 4,
//     name: "Bob Brown",
//     email: "bob@example.com",
//     age: 40,
//     address: "101 Pine St, Someville, USA",
//   },
//   {
//     id: 5,
//     name: "Emily Davis",
//     email: "emily@example.com",
//     age: 28,
//     address: "202 Maple St, Newcity, USA",
//   },
// ];

// const villas = require("./luxury.json");
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = process.env.MONGODB;
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("userDB").collection("users");
//     app.post("/users", async (req, res) => {
//       try {
//         const database = client.db("userDB").collection("users");
//         const newUser = req.body;
//         const result = await database.insertOne(newUser);
//         res.status(201).json(result.ops[0]); // Send the inserted user data as response
//       } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(500).json({ error: "Internal Server Error" }); // Send an error response
//       }
//     });

//     await client.db("admin").command({ ping: 1 });
//     console.log("You successfully connected to MongoDB!");
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

// // Routes
// app.get("/", (req, res) => {
//   res.send("User Management System is running");
// });

// app.get("/data", (req, res) => {
//   res.send("Data Coming");
// });

// app.get("/users", (req, res) => {
//   res.send(users);
// });

// // app.post("/users", (req, res) => {
// //   console.log("Api Hitting");
// //   console.log(req.body);

// //   const newUser = req.body;
// //   newUser.id = users.length + 1;
// //   users.push(newUser);

// //   res.status(201).json(newUser);
// // });

// app.get("/villas", (req, res) => {
//   res.send(villas);
// });

// app.get("/villas/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const villa = villas.find((villa) => villa.id === id) || {};
//   res.send(villa);
// });

// // Server Listening
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
