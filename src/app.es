"use strict";

//remote requires
const debug = require("debug")("code-splat:app");
const express = require("express");

//local requires
const config = require("./config");
const routes = require("./routes");

const app = express();

app.set("view engine", "jade");
app.set("views", "./src/views");
app.use("/", routes);

var server = null;

function runServer() {
  server = app.listen(config.port, () => {
    const address = server.address();
    const host = address.address === "::" ? "localhost" : address.address;
    debug("code-splat server now listening at " + host + ":" + address.port);
  });
}

module.exports = {
  run: runServer
};
