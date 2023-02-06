import logging

from src.config import CONFIG

logger = logging.getLogger("python-api")


class MessageDeliveryService:
    @staticmethod
    def send_message(message: dict) -> bool:
        logger.info(f"Message {message['message']}")
        logger.info(f"Send request to {CONFIG['external_api_path']}")

        # result = requests.post(CONFIG["external_api_path"], json=message)
        # return result.ok
        return True
