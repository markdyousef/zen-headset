from app import create_app
from flask_restful import Api
from resources.text import Text

app = create_app()
# API
api = Api(app)
api.add_resource(Text, '/text')

if __name__ == "__main__":
    app.run(port=5555)
