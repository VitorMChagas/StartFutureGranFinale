import logging

from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware

from app.models import dao_pg
from app.routers.forms import router as router_form
from app.routers.certificate import router as router_certificate
from app.routers.health import router as router_healthcheck
from app import parameters

# uvicorn app.app:app --host 0.0.0.0 --port 8000

if parameters.APP_MODE_OPTIONS['dev']:

    logging.basicConfig(level=logging.DEBUG)

else:

    logging.basicConfig(level=logging.WARNING)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=parameters.origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router=router_form)
app.include_router(router=router_certificate)
app.include_router(router=router_healthcheck)