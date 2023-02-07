import logging

import requests

from src.config import CONFIG

logger = logging.getLogger("python-api")


class MessageDeliveryService:
    @staticmethod
    def send_message(message: dict) -> bool:

        if message is None:
            return True

        make_service_call = "Python" not in message["message"]

        if not make_service_call:
            logger.info("Service already published a message")
            return True

        message["message"] += "Python, "

        logger.info(f"Send message {message['message']}")
        logger.info(f"Send request to {CONFIG['external_api_path']}")

        result = requests.post(CONFIG["external_api_path"], json=message)

        return result.ok
