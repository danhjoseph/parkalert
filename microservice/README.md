# National-Park-Alert-Getter
Microservice program to get parkCode alert data from the National Parks API

This Microservice that using it's own REST API pings the National Parks API using a given parkCode to gather any and all alerts associated with that park. It uses FastAPI, uvicorn, and python for its program.
# Running the server
To run the server, run the following command from the root directory:

uvicorn main:app
This will start the server on localhost:8000. --reload is optional and will reload the server on any changes to the code. You can change the port by adding --port <port_number> to the command.

# Using and Endpoints
To use the server simply ensure it is running, when it is ran, or restarted a user input promp will appear (at this time is will appear in the separate terminal to the 
main.py file) then enter a parkCode from one of any of the National Parks. At which point the local server will display the desired JSON data relating to the alerts of that park.

Endpoint is GET /alerts?parkCode={park code goes here}

# UML Diagram
![alt text](https://github.com/aidangold/National-Park-Alert-Getter/blob/main/natpark_uml.png)
