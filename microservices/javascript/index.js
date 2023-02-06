const express = require("express");
const bodyParser = require("body-parser");
const config = require('./config');

const apiRouter = require("./src/routes/apiRoutes");
const healthRouter = require("./src/routes/healthRoutes");

const app = express();
const PORT = process.env.PORT || config.service_port;

app.use(bodyParser.json());
app.use("/api", apiRouter);
app.use('/health', healthRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
