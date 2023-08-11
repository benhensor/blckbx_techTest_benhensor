from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route("/fizzbuzz")
def fizzbuzz():
    
    result = []

    for number in range(1, 101):

        if number % 3 == 0 and number % 5 == 0:
          result.append("FizzBuzz")
        elif number % 3 == 0:
          result.append("Fizz")
        elif number % 5 == 0:
          result.append("Buzz")
        else:
          result.append(number)


    return { "result": result }



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)