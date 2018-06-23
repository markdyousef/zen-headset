from flask import Flask
import os

# create Flask app
def create_app():
    app = Flask(__name__)
    app.config.update(
        DEBUG=True,
        CELERY_BROKER_URL="amqp://localhost")
        
    return app
