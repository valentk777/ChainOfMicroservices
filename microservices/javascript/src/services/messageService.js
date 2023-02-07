const config = require("../../config");

const sendMessage = async (body) => {

  if (body.message === null) {
    return true;
  }

  const makeServiceCall = !(body.message.includes("JavaScript"));

  if (!makeServiceCall) {
    console.info("Service already published a message");
    return true;
  }

  body.message += "JavaScript, ";

  console.info(`Message: ${JSON.stringify(body.message)}`)
  console.info(`Send request to ${config.external_api_path}`);

  const dataToSend = JSON.stringify(body);
  fetch(config.external_api_path, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: dataToSend
  })
      .then(resp => {
          if (resp.status === 200) {
              return resp.json()
          } else {
              console.log("Status: " + resp.status)
              return Promise.reject("server")
          }
      })
      .catch(err => {
          if (err === "server") {
            return false;
          }

          console.error(err);
      })
}

module.exports = {
  sendMessage,
};