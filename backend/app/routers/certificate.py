from fastapi import APIRouter

router = APIRouter(
    prefix="/certificate",
    tags=["certificate"]
)

@router.get('/')
def get_all_certificates():
    return {'a':'a'}

@router.get('/{code}')
def get_certificate_by_code(code):
    return {'code': code}