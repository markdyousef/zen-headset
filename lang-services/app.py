from flask_restful import Api
from resources.article import Article, ArticleList
from utils.celery import make_celery
from config import create_app
from flask_cors import CORS

# create Flask app
app = create_app()
CORS(app)

# API
api = Api(app)
api.add_resource(Article, '/article/<string:id>')
api.add_resource(ArticleList, '/articles')

if __name__ == "__main__":
    app.run(port=5555)
