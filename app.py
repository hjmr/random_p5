import os
import random
from flask import Flask, render_template

app = Flask(__name__)

urls = ["kaleido.html", "sakura.html", "snow_fall.html"]


@app.route("/")
def index():
    x = int(random.random() * 3)
    return render_template(urls[x])


if __name__ == "__main__":
    app.run()
