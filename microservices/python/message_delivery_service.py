import logging

from config import CONFIG

logger = logging.getLogger("python-api")


class MessageDeliveryService:
    @staticmethod
    def send_message(message: dict) -> bool:
        # result = requests.post(CONFIG["external_api_path"], json=message)
        # return result.ok
        logger.info(f"Send request to {CONFIG['external_api_path']}")
        return True
