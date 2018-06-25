from utils.text import get_text, analyze_text
from utils.celery import make_celery
from db import connect_db
from config import create_app

db = connect_db()
celery = make_celery(create_app())


@celery.task
def parse_text_to_db(url):
    articles = db["articles"]
    text = get_text(url)
    analysis = analyze_text(text)

    # upsert article item
    updated_article = articles.update_one(
        {"url": url}, {"$set": {"text": text, "analysis": analysis}}, True)

    return updated_article
