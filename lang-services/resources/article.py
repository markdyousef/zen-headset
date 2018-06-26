from flask_restful import Resource, reqparse
from tasks.text import parse_text_to_db
from models.article import ArticleModel


def parse_article(article):
    return {
        # hex encoded version of mongo's ObjectId
        "_id": str(article.get("_id")),
        "url": article.get("url"),
        "text": article.get("text"),
        "tokens": article.get("tokens"),
        "entities": article.get("entities"),
        "tree": article.get("tree")
    }


class Article(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("url", type=str, required=True,
                        help="Please provide a url")

    def get(self, id):
        article = ArticleModel.find_by_id(id)
        return parse_article(article)

    def post(self):
        data = Article.parser.parse_args()
        url = data["url"]

        existing = ArticleModel.find_by_id(url)
        if existing:
            return {"message": "A text with url '{}' already exists".format(url)}, 400

        # send to nlp pipeline
        try:
            article = ArticleModel(url)
            article.save()
            parse_text_to_db.delay(url)
        except:
            return {"message": "An error occurred inserting the item"}, 500

        return {"url": url}, 201


class ArticleList(Resource):
    def get(self):
        docs = ArticleModel.all()
        return [parse_article(doc) for doc in docs]
