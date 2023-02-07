const messageService = require("../services/messageService");
const status = require("../status");

const postMessage = (req, res) => {
  const { body } = req;

  if (body === null) {
    res.send(status.statusFailed);
  }
  
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