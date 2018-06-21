import os

from flask import Flask, jsonify
from flask_restful import Api
from ressources.text import Text

app = Flask(__name__)

# App Config
app.config["DEBUG"] = True
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get(
    "DATABASE_URL", "sqlite:///data.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = "insai12345"

# API
api = Api(app)
api.add_resource(Text, '/text')

if __name__ == "__main__":
    from db import db
    db.init_app(app)

    if app.config["DEBUG"]:
        @app.before_first_request
        def create_tables():
            db.create_all()
    app.run(port=5555)