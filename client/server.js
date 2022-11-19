const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const next = require("next");
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const isProduction = process.env.NODE_ENV;

const app = next({
  dev,
});
const handle = app.getRequestHandler();

const routes = require("./routes/routes");

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());

    server.use(routes(app, handle));

    server.use(express.static("public"));

    server.use((req, res) => {
      return handle(req, res);
    });

    if (isProduction === "production") {
      const appServer = http.createServer(server);

      appServer.listen(process.env.PORT || 3000, (err) => {
        if (err) throw err;
        console.log(`App ready on http://localhost:${process.env.PORT || 3000}`);
      });
    } else {
      server.listen(process.env.PORT || 3000, (err) => {
        if (err) throw err;
        console.log(`App ready on http://localhost:${process.env.PORT || 3000}`);
      });
    }
  })
  .catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
  });
