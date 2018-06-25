from flask_restful import Resource, reqparse
from tasks.text import parse_text_to_db
from db import connect_db
import json


def parse_article(article):
    return {
        "_id": str(article.get("_id")), # hex encoded version of mongo's ObjectId
        "url": article.get("url"),
        "text": article.get("text"),
        "tokens": article.get("tokens"),
        "entities": article.get("entities"),
        "tree": article.get("tree")
    }


class Text(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("url", type=str, required=True,
                        help="Please provide a url")
    db = connect_db()

    def get(self):
        articles = Text.db["articles"]
        docs = [doc for doc in articles.find()]

        return [parse_article(doc) for doc in docs]

    def post(self):
        articles = Text.db["articles"]
        data = Text.parser.parse_args()
        url = data["url"]

        existing = list(articles.find({"url": url}))
        if existing:
            return {"message": "A text with url '{}' already exists".format(url)}, 400

        # send to nlp pipeline
        parse_text_to_db.delay(url)

        try:
            articles.insert({"url": url})
        except:
            return {"message": "An error occurred inserting the item"}, 500

        return {"url": url}, 201
