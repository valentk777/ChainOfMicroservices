const config = require("../../config");

const sendMessage = (body) => {
  console.log(`Message: ${body.message}`)

  const requestParameters = {
    headers: {
      "content-type": "application/json"
    },
    body: body,
    method: "POST"
  }

  console.info(`Send request to ${config.external_api_path}`)

  try {
    fetch(config.external_api_path, requestParameters)
    .then(data => {return data.json()})
    .then(res => {console.log(res)})
    .catch(error => {
      console.error(`Failed to send message to ${config.external_api_path}`)
      console.error(error)
    })
    
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = {
  sendMessage,
};