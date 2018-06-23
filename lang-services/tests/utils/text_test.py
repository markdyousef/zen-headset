import unittest
from utils.text import get_text, analyze_text


class TestTextUtils(unittest.TestCase):
    def test_get_text(self):
        text = get_text(
            'https://www.atlasobscura.com/articles/where-is-vanilla-grown')
        self.assertIsNotNone(text)

    def test_analyze_text(self):
        text = get_text(
            'https://www.atlasobscura.com/articles/where-is-vanilla-grown')
        analysis = analyze_text(text)
        self.assertIsInstance(analysis, list)


if __name__ == '__main__':
    unittest.main()
