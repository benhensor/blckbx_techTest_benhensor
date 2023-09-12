from flask import Flask
from flask_cors import CORS

# Initialise app
app = Flask(__name__)
# Add CORS support for communication between front and back end ports
CORS(app)


# Check initialisation
print("Initialising Flask app...")

# Once the server packages are initialised, the endpoint for the API can be defined.
# Then, define a function to be called when the endpoint is hit.
# This function computates the fizzbuzz rules and erturns the formatted number list as json.


# Define route handler
@app.route("/fizzbuzz")

# Fn to calculate fizzbuzz rules
def fizzbuzz():
    
    # Check endpoint is hit
    print("Endpoint: /fizzbuzz hit successful")
    
    # Create and empty array to store the result
    result = []


    # Loop through numbers 1 to 100
    for number in range(1, 101):
        
        # Check if number is divisible by 3, 5 or both
        if number % 3 == 0 and number % 5 == 0:
            
        # If divisible by both, append FizzBuzz to the result array
          result.append("FizzBuzz")

        # Check if divisible by 3
        elif number % 3 == 0:
            
        # If divisible by 3, append Fizz to the result array
          result.append("Fizz")

        # Check if divisible by 5
        elif number % 5 == 0:

        # If divisible by 5, append Buzz to the result array
          result.append("Buzz")

        else:
        # If not divisible by 3 or 5, append the number to the result array
          result.append(number)

    # Check result
    print("fizzbuzz result: ", result)

    # Return the result array as JSON
    return { "result": result }


# Run the app
if __name__ == "__main__":
    
    # Ensure that the server is being run in dev mode on the correct port
    app.run(host='0.0.0.0', port=5000)