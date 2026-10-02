
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
const client = new MongoClient(process.env.MONGO_URI, {
  autoSelectFamily: false,
  serverSelectionTimeoutMS: 10000,
});

let db;

async function connectDB() {
  try {
    await client.connect();

    db = client.db("placementPortal");

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB full error:", error);
  }
}

// Test route
app.get("/", (req, res) => {
  res.send("Placement Portal Backend is Running!");
});

// Signup route
app.post("/signup", async (req, res) => {
  try {
    if (!db) {
      return res.status(503).json({
        message: "Database not connected",
      });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    res.json({
      message: "Account created successfully!",
    });
  } catch (error) {
    console.log("Signup error:", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    if (!db) {
      return res.status(503).json({
        message: "Database not connected",
      });
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter email and password",
      });
    }

    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    res.json({
      message: "Login successful!",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Login error:", error.message);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// Start server
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Connect to MongoDB
connectDB();