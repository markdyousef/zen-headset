from newspaper import Article
import spacy
nlp = spacy.load("en_core_web_sm")


def get_text(url):
    article = Article(url)
    article.download()
    # download doesn't always work
    try:
        article.parse()
        return article.text
    except Exception as excep:
        return False


def analyze_text(text):
    doc = nlp(text)

    # Tokens
    tokens = []
    for token in doc:
        token = {
            "text": token.text,
            "lemma": token.lemma_, "pos": token.pos_, "tag": token.tag_, "dep": token.dep_,
            "shape": token.shape_, "is_alpha": token.is_alpha, "is_stop": token.is_stop,

        }
        tokens.append(token)

    # Entities
    entities = []
    for ent in doc.ents:
        entity ={
            "text": ent.text, "label": ent.label_
        }
        entities.append(entity)
    
    # Parse trees in JSON    
    parse_trees = doc.print_tree()

    return tokens, entities, parse_trees
