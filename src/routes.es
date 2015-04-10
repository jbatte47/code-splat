"use strict";

const debug = require("debug")("code-splat:routes");
const express = require("express");

const router = express.Router();

router.get("/", (request,response) => {
  debug("Responding to request: /");
  response.render("index", {
    title: "code-splat",
    message: "gist.github.com for the enterprise"
  });
});

module.exports = router;
