import os
import random
from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

urls = ["kaleido", "sakura", "snow_fall"]


@app.route("/")
def index():
    x = int(random.random() * 3)
    return redirect(url_for(urls[x]))


@app.route("/kaleido")
def kaleido():
    return render_template("kaleido.html")


@app.route("/sakura")
def sakura():
    return render_template("sakura.html")


@app.route("/snowfall")
def snow_fall():
    return render_template("snow_fall.html")


if __name__ == "__main__":
    app.run()
