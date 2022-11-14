from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests


# url = "https://developer.nps.gov/api/v1/alerts/"
# key = 'ZJvoWwN2zapHRpAyW8GdbtzylT3WOdt8eR9FXMKB'


app = FastAPI()

origins = [
    "http://localhost:8000",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/{limit}")
async def get_alerts(limit):
    dynamic = "https://developer.nps.gov/api/v1/alerts?limit=" + \
        limit+"&api_key=ZJvoWwN2zapHRpAyW8GdbtzylT3WOdt8eR9FXMKB"
    response = requests.get(dynamic)
    data = response.json()
    package = data['data']
    return package


@app.get("/park/{parkCode}")
async def alerts(parkCode):
    dynamic = "https://developer.nps.gov/api/v1/alerts?parkCode=" + \
        parkCode + "&limit=50&api_key=ZJvoWwN2zapHRpAyW8GdbtzylT3WOdt8eR9FXMKB"
    response = requests.get(dynamic)
    data = response.json()
    package = data['data']
    return package


@app.get("/address/{parkCode}")
async def address(parkCode):
    dynamic = "https://developer.nps.gov/api/v1/parks?parkCode=" + \
        parkCode + "&api_key=ZJvoWwN2zapHRpAyW8GdbtzylT3WOdt8eR9FXMKB"
    response = requests.get(dynamic)
    data = response.json()
    package = data['data']
    return package
