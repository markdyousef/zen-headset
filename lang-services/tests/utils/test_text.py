import unittest
from utils.text import get_text, analyze_text

class TestTextUtils(unittest.TestCase):
    def test_get_text(self):
        text = get_text("www.clai.io")
        self.assertIsNotNone(text)