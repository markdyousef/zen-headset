from utils.celery import make_celery
from config import app
from utils.text import get_text, analyze_text

# Celery config
celery = make_celery(app)


@celery.task
def parse_text(url):
    print(url)
    text = get_text(url)
    print(text)
