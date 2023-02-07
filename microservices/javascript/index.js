const express = require("express");
const bodyParser = require("body-parser");
const config = require('./config');

const messageRoutes = require("./src/routes/messageRoutes");
const healthRouter = require("./src/routes/healthRoutes");

const app = express();
const PORT = process.env.PORT || config.service_port;

app.use(bodyParser.json());
app.use("/api", messageRoutes);
app.use('/health', healthRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
