from db import connect_db
from bson import ObjectId


class ArticleModel(object):
    db = connect_db()
    collection = db["articles"]

    def __init__(self, url):
        self.url = url
        self.tokens = []
        self.text = ""
        self.entities = []
        self.tree = {}

    @classmethod
    def all(cls):
        return list(cls.collection.find())

    @classmethod
    def find_by_id(cls, id):
        articles = list(cls.collection.find({"_id": ObjectId(id)}))
        return articles[0]

    @classmethod
    def find_by_url(cls, url):
        return list(cls.collection.find({"url", url}))[0]

    def save(self):
        return self.collection.insert({"url", self.url})

    def upsert(self, fields):
        return self.collection.update_one(
            {"url": fields["url"]}, {"$set": fields}, True)
