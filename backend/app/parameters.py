import os

DB_PG_HOST = os.environ.get("DB_PG_HOST")
DB_PG_PORT = os.environ.get("DB_PG_PORT")
DB_PG_DATABASE = os.environ.get("DB_PG_DATABASE")
DB_PG_USERNAME = os.environ.get("DB_PG_USERNAME")
DB_PG_PASSWORD = os.environ.get("DB_PG_PASSWORD")
DB_PG_SCHEMA = os.environ.get("DB_PG_SCHEMA")
APP_MODE = os.environ.get("APP_MODE")

APP_MODE_OPTIONS = {
    'dev': 'development',
    'prod': 'production'
}

origins = [
    "http://localhost",
    "http://localhost:3000",
    "https://www.startfuture.com.br/",
    "https://www.startfuture.com.br",
    "https://www-dev.startfuture.com.br/",
    "https://www-dev.startfuture.com.br",
    "http://0.0.0.0",
    "http://0.0.0.0:3000",
]

class Regex:
    full_name = r'^[A-Za-zÀ-ÖØ-Ýà-öø-ÿ ]{1,150}$'
    email = r'^[a-zA-Z0-9_.+-]{1,}@[a-zA-Z0-9-]{1,}\.[a-zA-Z0-9-.]{1,}$'
    cellphone = r'\d{14}'