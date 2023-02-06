const status = require("../status");

const getHealth = async (_req, res, _next) => {
  try {
    res.send(status.statusOk);
  } catch (error) {
    res.message = error;
    res.status(503).send();
  }
};

module.exports = {
  getHealth
};