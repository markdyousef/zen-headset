from utils.text import get_text, analyze_text


class TestTextUtils(object):
    def test_get_text(self):
        text = get_text(
            'https://www.atlasobscura.com/articles/where-is-vanilla-grown')
        assert isinstance(text, str)

    def test_analyze_text(self):
        text = get_text(
            'https://www.atlasobscura.com/articles/where-is-vanilla-grown')
        tokens, ents, parse_tree = analyze_text(text)
        assert isinstance(tokens, list)
