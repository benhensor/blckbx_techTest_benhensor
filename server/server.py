from flask import Flask
from flask_cors import CORS

# Create the app
app = Flask(__name__)
# Add CORS support
CORS(app)

# Once the server packages are installed, our endpoint can be defined.
# This is done using the route decorator /

# Then we can define a function that will be called when the endpoint is hit.
# This function will return the result of the FizzBuzz calculation.


# Define a handler for the route "/"
@app.route("/fizzbuzz")

# Function to calculate FizzBuzz rules and return the result
def fizzbuzz():
    
    # Create an empty array to store the result
    result = []
    
    # Loop through numbers 1 to 100
    for number in range (1, 101):
        # Check if number is divisible by 3, 5 or both
        if number % 3 == 0 and number % 5 == 0:
            # If divisible by both, append FizzBuzz to the result array
            result.append("FizzBuzz")
        # If divisible by 3, append Fizz to the result array
        elif number % 3 == 0:
            # If divisible by 3, append Fizz to the result array
            result.append("Fizz")
        # If divisible by 5, append Buzz to the result array
        elif number % 5 == 0 :
            # If divisible by 5, append Buzz to the result array
            result.append("Buzz")
        else:
            # If not divisible by 3 or 5, append the number to the result array
            result.append(number)

    # Return the result array as JSON
    return { "result": result }

# Run the app
if __name__ == "__main__":
    # Ensure that server is being run in development mode
    app.run(host='0.0.0.0', port=5000)