use std::fmt::{Display, Formatter};
use actix_web::{
    error::ResponseError,
    HttpResponse,
    http::{header::ContentType, StatusCode},
};
use derive_more::{Display, Error};

#[derive(Debug, Display, Error)]
pub enum ApiError {
    #[display(fmt = "unable to send a message")]
    UnableToSendMessage
}

impl ResponseError for ApiError {
    fn error_response(&self) -> HttpResponse {
        HttpResponse::build(self.status_code())
            .insert_header(ContentType::json())
            .body(self.to_string())
    }

    fn status_code(&self) -> StatusCode {
        match self {
            ApiError::UnableToSendMessage => StatusCode::BAD_REQUEST
        }
    }
}
