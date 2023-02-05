import logging

from waitress import serve

from app import create_app
from config import CONFIG

if __name__ == "__main__":
    logger = logging.getLogger("python-api")
    logger.setLevel(logging.INFO)

    app = create_app()
    serve(app, host="0.0.0.0", port=CONFIG["service_port"])
