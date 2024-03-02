const express = require("express");
const next = require("next");
const backendApp = require("./backend/index.js");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
require("module-alias/register");

app.prepare().then(() => {
  const server = express();

  server.use("/api", backendApp);

  // Default handler for Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(8080, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:8080");
  });
});
