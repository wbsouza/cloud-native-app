import os


from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

MONGO_DB = "langdb"
MONGO_COLLECTION = "languages"

# can be override by environment variables
# MONGO_DEFAULT_CONN_STR = "mongodb://mongo-0.mongo,mongo-1.mongo,mongo-2.mongo:27017/langdb"
MONGO_DEFAULT_CONN_STR = "mongodb://localhost:27017/langdb"
MONGO_DEFAULT_USERNAME = "admin"
MONGO_DEFAULT_PASSWORD = "password"


def load_dbconfigs(app):
    username = os.getenv("MONGO_USERNAME", default=MONGO_DEFAULT_USERNAME)
    password = os.getenv("MONGO_PASSWORD", default=MONGO_DEFAULT_PASSWORD)
    conn_str = os.getenv("MONGO_CONN_STR", default=MONGO_DEFAULT_CONN_STR)

    parts = conn_str.split("://")
    mongo_uri = "%s://%s:%s@%s" % (parts[0], username, password, parts[1])

    app.config["MONGO_USERNAME"] = username
    app.config["MONGO_PASSWORD"] = password

    app.config['MONGO_URI'] = mongo_uri
    app.config['MONGO_DBNAME'] = MONGO_DB
    app.config['MONGO_USERNAME'] = username
    app.config['MONGO_PASSWORD'] = password
    app.config['MONGO_AUTH_SOURCE'] = 'admin'


app = Flask(__name__)
load_dbconfigs(app)
mongo = PyMongo(app)


# health-check
@app.route('/ok')
def hello_world():
    return 'OK!'


@app.route('/languages', methods=['GET'])
def get_languages():
    items = mongo.db.languages.find({})
    result = []
    for item in items:
        item.pop('_id')
        result.append(item)
    return jsonify(result)


@app.route('/languages/<language>', methods=['GET'])
def get_language(language):
    result = mongo.db.languages.find_one_or_404({"name": language})
    result.pop('_id')
    return jsonify(result)


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0')