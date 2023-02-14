use std::collections::HashMap;

use log::info;
use crate::config::Config;

use crate::models::message::Message;

pub async fn send_message(message: Message) -> bool {
    let make_service_call = !message.message.contains("Rust");

    if !make_service_call {
        info!("Service already published a message");
        return true;
    }

    let mut request = HashMap::new();
    request.insert("message", message.message + "Rust");

    let external_path = Config::external_api_path();

    info!("Send message {}", request.get("message").unwrap());
    info!("Send request to {}", external_path);

    let client = reqwest::Client::new();

    if !Config::need_to_publish() {
        info!("No need to publish request");
        return true;
    }

    let response = client.post(external_path)
        .json(&request)
        .send()
        .await;

    return match response {
        Ok(r) => true,
        Err(e) => false,
    };
}
