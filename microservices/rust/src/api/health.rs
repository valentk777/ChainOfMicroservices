use actix_web::{
    get,
    web::Json,
};

use crate::api::errors::ApiError;
use crate::models::status::Status;


#[get("health")]
pub async fn get_health() -> Result<Json<Status>, ApiError> {
    let status = Status {
        status: "OK".to_string(),
    };

    return Ok(Json(status));
}
