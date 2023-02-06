const config = require("../../config");

const sendMessage = (body) => {
  console.log(`Message: ${body.message}`)

  const requestParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
  
  console.info(`Send request to ${config.external_api_path}`)

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



  // try {
  //   fetch(config.external_api_path, requestParameters)
  //   .then(data => {return data.json()})
  //   .then(res => {console.log(res)})
  //   .catch(error => {
  //     console.error(`Failed to send message to ${config.external_api_path}`)
  //     console.error(error)
  //   })
    
  //   return true;
  // } catch (e) {
  //   console.log(e);
  //   return false;
  // }
}

module.exports = {
  sendMessage,
};