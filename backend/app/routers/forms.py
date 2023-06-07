import logging

from fastapi import APIRouter, status, HTTPException, Path
from fastapi.responses import JSONResponse

from app.schemas import form
from app.models import dao_pg
from app.parameters import Regex

router = APIRouter(
    prefix="/form",
    tags=["form"]
)

@router.get('/')
def get_all_forms():
    raise HTTPException(
            detail={'msg': 'not implemented'},
            status_code=status.HTTP_501_NOT_IMPLEMENTED
        )

@router.get('/email/{email}')
def verify_email_in_use(email : str = Path(regex=Regex.email)):

    is_not_unique_email = dao_pg.FormDAO.verify_if_email_exist(email)

    if is_not_unique_email:
        raise HTTPException(
            detail={'msg': 'Email already in use', 'error_code':'1'},
            status_code=status.HTTP_409_CONFLICT
        )
    
    else:
        
        return JSONResponse(
            content={'msg': 'Email not in use'},
            status_code=status.HTTP_200_OK
        )

@router.get('/cellphone/{cellphone}')
def verify_cellphone_in_use(cellphone : str = Path(regex=Regex.cellphone)):

    is_not_unique_cellphone = dao_pg.FormDAO.verify_if_cellphone_exist(cellphone)

    if is_not_unique_cellphone:
        raise HTTPException(
            detail={'msg': 'Cellphone already in use', 'error_code':'2'},
            status_code=status.HTTP_409_CONFLICT
        )
    
    else:
        return JSONResponse(
            content={'msg': 'Cellphone not in use'},
            status_code=status.HTTP_200_OK
        )

@router.post('/register')
def register_lead(form : form.Form):

    is_not_unique_email = dao_pg.FormDAO.verify_if_email_exist(form.email)
    is_not_unique_cellphone = dao_pg.FormDAO.verify_if_cellphone_exist(form.cellphone)

    if is_not_unique_email:
        raise HTTPException(
            detail={'msg': 'Email already in use', 'error_code':'1'},
            status_code=status.HTTP_409_CONFLICT
        )
    
    if is_not_unique_cellphone:
        raise HTTPException(
            detail={'msg': 'Cellphone already in use', 'error_code':'2'},
            status_code=status.HTTP_409_CONFLICT
        )

    is_valid = dao_pg.FormDAO.create_lead_in_db(form=form)

    if is_valid:

        return JSONResponse(
            content={'msg': 'success lead create'},
            status_code=status.HTTP_201_CREATED
        )
    
    else:

        raise HTTPException(
            detail={'msg': 'error in database'},
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
