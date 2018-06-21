from db import db


class TextModel(db.Model):
    __tablename__ = "collection_texts"

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(80))

    def __init__(self, url):
        self.url = url

    def json(self):
        return {"url": self.url}

    @classmethod
    def find_by_url(cls, url):
        return cls.query.filter_by(url=url).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
