from __future__ import print_function
import imp
import json
import re
import string
from xml.sax.handler import LexicalHandler
from flask import Flask, jsonify, request
from flask_cors import CORS
from data import state_id,state_city
import time
from flask import Flask
import sys
from leaderboard import leaderboard
from state import state_data
from Cluster import cluster_data
from ast import literal_eval
# robotIP="localhost"
from search import handle_search
# PORT=9559
app = Flask(__name__)

access_token='a'
action="d"

@app.route('/Cluster', methods=['POST'])
def cluster():
    nao_json = request.data
    print(nao_json)
    access_token=int(nao_json.decode())
    print(type(access_token))
    resp=cluster_data(access_token)
    resp["time_series"][0]["villages"] = literal_eval(resp["time_series"][0]["villages"])
    resp["Ammeneties"][0]["villages"] = literal_eval(resp["Ammeneties"][0]["villages"])
    print(resp)
    return jsonify(resp), 200

@app.route('/leader', methods=['GET'])
def leader():
    a,b=leaderboard()
    # a["villages"]=literal_eval(a["villages"])
    return {"statewise":b.to_dict(orient='records'),
            "clusterwise":a.to_dict(orient='records')}, 200
@app.route('/state', methods=['POST'])
def state():
    nao_json = request.data
    print(nao_json)
    access_token=nao_json.decode()
    resp=state_data(access_token)
    return jsonify(resp), 200

@app.route('/search', methods=['POST'])
def search():
    nao_json = request.data
    print(nao_json.decode())
    access_token=json.loads(nao_json.decode())
    resp=handle_search(flag=access_token["access_token"],data=access_token["name"])
    print(resp)
    # resp=state_data(access_token)
    return jsonify(resp), 200


@app.after_request
def set_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
    return response
if __name__ == "__main__":
    app.run(debug=True,port=8080,host="0.0.0.0")
