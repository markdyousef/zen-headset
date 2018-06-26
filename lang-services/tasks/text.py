from utils.text import get_text, analyze_text
from utils.celery import make_celery
from models.article import ArticleModel
from config import create_app
from db import connect_db

celery = make_celery(create_app())


@celery.task
def parse_text_to_db(url):
    article = ArticleModel(url)
    text = get_text(url)
    tokens, entities, parse_tree = analyze_text(text)


    # upsert article item
    fields = {
        "url": url,
        "text": text,
        "tokens": tokens,
        "entities": entities,
        "tree": parse_tree
    }

    return article.upsert(fields)

@celery.task
def sync_articles():
    # compares ids from pocket-list with articles
    # and starts analysis tasks on missing items

    # get pocket list and article connections
    db = connect_db()
    pocket_list = list(db["pocket_list"].find())
    articles_url = [doc["url"] for doc in list(db["articles"].find())]

    # check if pocket list items are in articles
    missing_items = []
    for item in pocket_list:
        if item["url"] not in articles_url:
            missing_items.append(item)
    
    # analyze missing items
    for item in missing_items:
        parse_text_to_db(item["url"])

    return missing_items