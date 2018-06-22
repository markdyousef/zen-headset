from flask_restful import Api
from ressources.text import Text
from utils.celery import make_celery
from config import app

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
