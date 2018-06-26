from tests.test_base import BaseTest
import json

class TextTest(BaseTest):
    def test_get_articles(self):
        with self.app() as client:
            with self.app_context():
                res = client.get("/articles")
                assert res.status_code == 200