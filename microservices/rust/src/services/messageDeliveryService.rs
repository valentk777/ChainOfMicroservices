use reqwest;

use crate::models::message::Message;

pub async fn send_message(message: Message) -> bool {
    // todo: make http call
    // todo: get value from config

    if message == None {
        return true;
    }

    make_service_call = message.message.contains("Rust");

    if !make_service_call {
        // logger.info("Service already published a message")
        return true;
    }

    let request = Message {
        message: message.message + "Rust"
    };


    let client = Client::new();
    let res = client.post("http://httpbin.org/post")
        .body("the exact body that is sent")
        .send()
        .await?;


    // logger.info(f"Send message {message['message']}")
    // logger.info(f"Send request to {CONFIG['external_api_path']}")

    // result = requests.post(CONFIG["external_api_path"], json=message)


    return true;
}
