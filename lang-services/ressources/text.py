from flask_restful import Resource, reqparse
from models.text import TextModel


class Text(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("url", type=str, required=True,
                        help="Please provide a url")

    def post(self):
        data = Text.parser.parse_args()
        url = data["url"]
        print(url)
        if TextModel.find_by_url(url):
            return {"message": "A text with url '{}' already exists".format(url)}, 400
        
        text = TextModel(url)

        try:
            text.save_to_db()
        except:
            return {"message": "An error occurred inserting the item"}, 500
        
        return text.json(), 201



