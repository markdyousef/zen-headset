import os

from flask import Flask, jsonify
from flask_restful import Api
from ressources.text import Text

app = Flask(__name__)

# App Config
app.config["DEBUG"] = True

# API
api = Api(app)
api.add_resource(Text, '/text')

if __name__ == "__main__":
    app.run(port=5555)
