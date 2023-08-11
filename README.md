# blckbx_techTest_benhensor
My attempt at the BLCKBX FizzBuzz tech challenge

## Set up

### Navigate to the server directory and install a virtual server environment

pip3 install virtualenv

### Create a virtual environment

virtualenv name-of-env 

### Activate the environment

source name-of-env/bin/activate

### Install Flask

pip3 install Flask

### Install Flask-Cors

pip3 install Flask-Cors


### Start backend server

python3 server.py

### Start frontend client

npm start



## Notes on Authentication

Due to time constraints and my lack of experience with Python, 
I focused on building the core functionality of the FizzBuzz application.
While I did not implement an authentication system, I did formulate a plan for one. 

A simple way to do it would be to create a key (API_KEY = "secret-api-key") in the server code
along with a function that checks incoming api calls for the same key sent from the front end 
via the api headers. If the key is recognised then access is granted, otherwise access is restricted.

I tried to build this but ran into issues with unfamiliar syntax and did not have time to research further.

This approach would be explicitly for demo purposes only and real-world use-cases would require more 
robust authentication methods such as OAuth or JSON Web Tokens (JWT) to ensure 
secure access to the front-end application. This would involve integrating 
an authentication provider, generating tokens, and verifying 
user identity before granting access to the application.


## Notes on Security Measures

I was unable to implement any significant security measures during the designing and building of my solution
to the FizzBuzz technical challenge however, I can consider options that could be applied here. 

CORS Configuration: 
I have used the Flask-CORS extension to configure Cross-Origin Resource Sharing (CORS) and restrict which origins can access the API. 
This helps prevent unauthorized cross-origin requests.

Simple Input Validation: 
The application performs limited input validation to ensure that user input is within expected ranges. 
This helps prevent injection attacks and invalid data from affecting the application's functionality. This could be developed further
to include more edge-cases and enhanced effectiveness.

Secure Communication: 
In this case, I have used HTTP for communication between local front and back-end servers. In a real-world situation and for larger-scale
projects it is of course better to use HTTPS to ensure encrypted communication, protecting sensitive data during transit.

Limited Dependencies: 
Perhaps due to the limited scope of this project, I have not used many external dependencies which can be
considered good in the sense that it minimises security vulnerabilities and reduces the risk of outdated libraries.

Error Handling: 
Some error handling is used to catch basic errors and help with debugging.


For a larger-scale project, I would expand these security measures to include additional 
layers of protection such as rate limiting, user authentication, role-based 
access control, and regular security audits. 

Continuous security testing would also be a sensible strategy to ensuring a robust and secure 
application. 

