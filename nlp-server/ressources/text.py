from flask_restful import Resource, reqparse
import spacy
import json
nlp = spacy.load("en_core_web_sm")


class Text(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument("text", type=str, required=True,
                        help="Please provide a text")

    def post(self):
        data = Text.parser.parse_args()
        doc = nlp(data['text'])

        token_list = []
        for token in doc:
            token = {
                "text": token.text,
                "lemma": token.lemma_, "pos": token.pos_, "tag": token.tag_, "dep": token.dep_,
                "shape": token.shape_, "is_alpha": token.is_alpha, "is_stop": token.is_stop

            }
            token_list.append(token)
        
        return token_list
