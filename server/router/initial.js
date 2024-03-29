const express = require("express");
const router = express.Router();
const utils = require("../utils");

// middleware that is specific to this router

const data = {
  name: "Orbit-Odyssey-REST-API",
  version: "1.0.0",
  description: "REST-api for back-end of OrbitOdyssey",
  main: "index.js",
};

router.get("/", function (req, res) {
  res.send(data);
});

module.exports = router;
