from flask_restful import Resource, reqparse
from tasks import parse_text_to_db
from db import db


class Text(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("url", type=str, required=True,
                        help="Please provide a url")

    def get(self):
        articles = db["articles"]
        return [doc for doc in articles.find()]

    def post(self):
        articles = db["articles"]
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
