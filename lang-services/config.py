from flask import Flask
import os

# App Config
app = Flask(__name__)
app.config.update(
    DEBUG=True,
    SQLALCHEMY_DATABASE_URI=os.environ.get(
        "DATABASE_URL", "sqlite:///data.db"),
    SQLALCHEMY_TRACK_MODIFICATIONS=False,
    CELERY_BROKER_URL="amqp://localhost"
)
