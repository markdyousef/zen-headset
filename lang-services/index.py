from newspaper import Article
import spacy
nlp = spacy.load("en_core_web_sm")

url = "https://spacy.io/usage/linguistic-features"
# parse url
print(url)
article = Article(url)
article.download()
article.parse()

# plain text & spacy Doc
text = article.text
doc = nlp(text)

token_list = []
for token in doc:
    token = {
        "text": token.text,
        "lemma": token.lemma_, "pos": token.pos_, "tag": token.tag_, "dep": token.dep_,
        "shape": token.shape_, "is_alpha": token.is_alpha, "is_stop": token.is_stop

    }
    token_list.append(token)

# return token_list
