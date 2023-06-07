from fastapi import APIRouter

router = APIRouter(
    prefix="/healthcheck",
    tags=["healthcheck"]
)

@router.get('/ping')
def healthcheck():
    return {'Status':'ok'}