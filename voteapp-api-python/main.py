import os

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
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

    app.config['MONGO_URI'] = mongo_uri
    app.config['MONGO_DBNAME'] = MONGO_DB
    app.config['MONGO_USERNAME'] = username
    app.config['MONGO_PASSWORD'] = password
    app.config['MONGO_AUTH_SOURCE'] = 'admin'   


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

load_dbconfigs(app)
mongo = PyMongo(app)


# health-check
@app.route('/ok')
def hello_world():
    return 'OK!'


@app.route('/languages', methods=['GET'])
@cross_origin()
def get_languages():
    items = mongo.db.languages.find({})
    result = []
    for item in items:
        item.pop('_id')
        result.append(item)
    return jsonify(result)


@app.route('/languages/<language>', methods=['GET'])
@cross_origin()
def get_language(language):
    result = mongo.db.languages.find_one_or_404({"name": language.lower()})
    result.pop('_id')
    return jsonify(result)


@app.route('/languages/<name>', methods=['POST'])
@cross_origin()
def create_language(name):
    if mongo.db.languages.find({'name': name.lower()}).count() > 0:
        return "Language already exists", 409
    else:
        language = {
            'name': name.lower(),
            'codedetail': request.get_json()
        }
        mongo.db.languages.insert(language)
        return "Added language successfully"


@app.route('/languages/<name>/vote', methods=['GET'])
@cross_origin()
def vote_on_language(name):
    name = name.lower()
    result = mongo.db.languages.find_one_or_404({"name": name})
    result['codedetail']['votes'] = result['codedetail']['votes'] + 1
    new_value = {'$set': {'codedetail.votes': result['codedetail']['votes']}}
    mongo.db.languages.update_one({'_id': result['_id']}, new_value)
    result.pop('_id')
    return jsonify(result)


@app.route('/languages/<name>', methods=['DELETE'])
@cross_origin()
def delete_language(name):
    name = name.lower()
    result = mongo.db.languages.delete_one({'name': name})
    data = {'count': result.deleted_count}
    return jsonify(data)


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port='8080')