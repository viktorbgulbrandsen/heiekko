from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/flashcard" , methods=["GET"])
def return_flashcard():
    # This is just an example, you might want to pull this data from a database or another service
    flashcard = {
        "question": "What is the capital of France?",
        "answer": "Paris"
    }
    return jsonify(flashcard)

if __name__ == "__main__":
    app.run(debug = True, port = 8080)

