use std::env;
use std::net::SocketAddr;

use actix_web::{App, HttpServer, middleware::Logger};

use api::health::get_health;
use api::message::post_message;
use config::Config;

mod api;
mod models;
mod services;
mod config;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env::set_var("RUST_LOG", "debug");
    env::set_var("RUST_BACKTRACE", "1");
    env_logger::init();

    let port = Config::service_port();
    let address = SocketAddr::from(([127, 0, 0, 1], port));

    HttpServer::new(move || {
        let logger = Logger::default();

        App::new()
            .wrap(logger)
            .service(get_health)
            .service(post_message)
    })
        .bind((&address))
        ?.run()
        .await
}
