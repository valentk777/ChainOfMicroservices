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

  const requestParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }

  fetch(config.external_api_path, requestParameters)
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      return true;
    })
    .catch((error) => {
      console.error('Error:', error);
      return false;
    });
}

module.exports = {
  sendMessage,
};