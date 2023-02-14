use std::env;

pub struct Config {
    pub service_port: u16,
    pub external_api_path: String,
}

impl Config {
    #[inline]
    pub fn service_port() -> u16 {
        5554
    }

    #[inline]
    pub fn external_api_path() -> String {
        "http://python-api:5551/api/message".to_string()
    }

    #[inline]
    pub fn need_to_publish() -> bool {
        env::var_os("NEED_TO_PUBLISH_REQUEST").is_none()
    }
}
