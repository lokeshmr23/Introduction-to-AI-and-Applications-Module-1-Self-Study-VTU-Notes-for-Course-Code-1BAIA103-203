"""VTUHub — serves the static classroom app (also works on GitHub Pages without Flask)."""
import os
from flask import Flask, send_from_directory

ROOT = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__, static_folder=None)


@app.route("/")
def index():
    return send_from_directory(os.path.join(ROOT, "templates"), "index.html")


@app.route("/static/<path:filename>")
def static_files(filename):
    return send_from_directory(os.path.join(ROOT, "static"), filename)


@app.route("/health")
def health():
    return {"status": "ok", "course": "1BAIA103"}


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
