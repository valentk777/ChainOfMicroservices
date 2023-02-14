mod api;
mod models;
mod services;

use std::env;
use actix_web::{HttpServer, App, middleware::Logger};
use api::health::{get_health};
use api::message::{post_message};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env::set_var("RUST_LOG", "debug");
    env::set_var("RUST_BACKTRACE", "1");
    env_logger::init();

    // if env::var_os("IS_TESTING_ENV").is_none() {
    //
    // }

    HttpServer::new(move || {
        // add logging
        let logger = Logger::default();

        App::new()
            .wrap(logger)
            .service(get_health)
            .service(post_message)
    })
        // .bind(&address)
        .bind(("127.0.0.1", 5554))
        ?.run()
        .await
}
