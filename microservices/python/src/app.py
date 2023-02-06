import logging
import traceback
from time import strftime

from flask import Flask, request
from src.status import StatusOk, StatusFailed

from src.config import CONFIG
from src.message_delivery_service import MessageDeliveryService

logger = logging.getLogger("python-api")
timestamp_format = strftime("[%Y-%m-%d %H:%M]")


def create_app() -> Flask:
    logger.warning("Application starting")

    app = Flask(__name__)

    @app.get("/health")
    def health():
        return StatusOk

    @app.post("/api/message")
    def set_provided_status_for_another_service_call() -> dict:
        content = request.json
        content["message"] += "Python, "

        result = MessageDeliveryService.send_message(content)

        if result:
            return StatusOk
        else:
            return StatusFailed

    @app.after_request
    def after_request(response):
        logger.info(
            "%s %s %s %s %s %s",
            timestamp_format,
            request.remote_addr,
            request.method,
            request.scheme,
            request.full_path,
            response.status)
        return response

    @app.errorhandler(Exception)
    def exceptions(e):
        tb = traceback.format_exc()
        logger.error(tb)
        return StatusFailed

    logger.warning(f"API is listening on port {CONFIG['service_port']}")

    return app
