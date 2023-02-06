const messageService = require("../services/apiService");
const status = require("../status");

const postMessage = (req, res) => {
  const { body } = req;

  body.message += "JavaScript, ";

  const result = messageService.sendMessage(body);

  if (result) {
    res.send(status.statusOk);
  } else {
    res.send(status.statusFailed);
  }
};

module.exports = {
  postMessage,
};