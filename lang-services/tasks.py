from utils.celery import make_celery
from app import create_app
from utils.text import get_text, analyze_text
from db import db

flask_app = create_app()
# Celery config
celery = make_celery(flask_app)

@celery.task
def parse_text_to_db(url):
    articles = db["articles"]
    text = get_text(url)
    analysis = analyze_text(text)

    # upsert article item
    updated_article = articles.update_one({"url": url}, {"$set": {"text": text, "analysis": analysis}}, True)

    return updated_article
