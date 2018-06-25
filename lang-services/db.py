from pymongo import MongoClient


def connect_db(name="zen_dev"):
    client = MongoClient("localhost", 27017)
    db = client[name]
    
    return db
