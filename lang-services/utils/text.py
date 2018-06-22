from newspaper import Article
import spacy
nlp = spacy.load("en_core_web_sm")


def get_text(url):
    print("Inside: ", url)
    article = Article(
        'http://fox13now.com/2013/12/30/new-year-new-laws-obamacare-pot-guns-and-drones/')
    article.download()
    article.parse()
    print(article)
    text = article.text
    print(text)
    return text


def analyze_text(text):
    doc = nlp(text)

    token_list = []
    for token in doc:
        token = {
            "text": token.text,
            "lemma": token.lemma_, "pos": token.pos_, "tag": token.tag_, "dep": token.dep_,
            "shape": token.shape_, "is_alpha": token.is_alpha, "is_stop": token.is_stop

        }
        token_list.append(token)

    return token_list
