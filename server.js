const express = require("express");
const next = require("next");
const backendApp = require("./backend/index.js");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const cors = require("cors");
const { socketServer } = require("./socketServer.js");

app.prepare().then(() => {
  const app = express();
  app.use(cors());

  app.use("/api", backendApp);

  // Default handler for Next.js
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  const server = socketServer(app);

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
