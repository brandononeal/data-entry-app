const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const peopleRouter = require("./people/people-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/people", peopleRouter);

server.get("/", (req, res) => {
  res.json({ server: "up" });
});

module.exports = server;
