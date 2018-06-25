from app import app
from db import connect_db
from unittest import TestCase


class BaseTest(TestCase):
    """
        BaseTest and parent class for each non-unit test
        * allows for instantiation of DB dynamically
        * ensures new, blank DB each time
    """

    def setUp(self):

        # get a test client
        self.app = app.test_client
        self.app_context = app.app_context
        self.db = connect_db("zen_test")
