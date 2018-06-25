from flask_restful import Api
from resources.text import Text
from utils.celery import make_celery
from config import create_app

# create Flask app
app = create_app()

# API
api = Api(app)
api.add_resource(Text, '/text')

if __name__ == "__main__":
    app.run(port=5555)
