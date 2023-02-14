use actix_web::{
    post,
    web::Json,
};

use crate::api::errors::ApiError;
use crate::models::status::Status;
use crate::models::message::Message;
use crate::services::messageDeliveryService::{send_message};

#[post("api/message")]
pub async fn post_message(body: Json<Message>) -> Result<Json<Status>, ApiError> {
    let result = send_message(body.into_inner()).await;

    if !result {
        let status = Status {
            status: "Failed".to_string(),
        };

        return Ok(Json(status));
    }

    let status = Status {
        status: "OK".to_string(),
    };

    return Ok(Json(status));
}
