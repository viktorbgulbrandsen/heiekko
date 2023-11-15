from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
#cors = CORS(app, resources={r"/*": {"origins": "*"}})

flashcardkk = [{"id" : 0,"question": "What is the capital of France?","answer": "Paris", "rating" : ""}
            ,{"id" : 1, "question": "What is the capital of Norway", "answer": "Norway", "rating" : ""}]

flashcard = {"question": "What is the capital of France?","answer": "Paris", "rating" : ""}
             

             

@app.route("/api/flashcard" , methods=["GET"])
def return_flashcard():
    return jsonify(flashcard)


from flask import request


@app.route('/serverWantsData', methods=['POST'])
def append_data():
    if request.method == "POST":
        data = request.json #requests from a POST.
        print(data)
        flashcard["rating"] = data["value"] #oppdaterer ratingen, stores in local flashcard now. 
        print(flashcard) #checks if OK
        return jsonify(flashcard)

if __name__ == "__main__":
    app.run(debug = True, port = 8080)

#
