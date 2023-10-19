#!/usr/bin/python3

"""
minimal Flask application demo from Quickstart

Author: Bradley Dillion Gilden
Date: 19-10-2023
"""


from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


if __name__ == '__main__':
    app.run(debug=True)
