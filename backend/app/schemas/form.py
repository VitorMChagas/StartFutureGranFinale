from typing import Optional, Literal
from pydantic import BaseModel, Field
from app.parameters import Regex


class Form(BaseModel):
    full_name : str = Field(regex=Regex.full_name)
    email : str = Field(max_length=100, regex=Regex.email)
    cellphone : str = Field(regex=Regex.cellphone)
    id_career : Literal[1,2,3,4]
    has_tech_knowledge : bool
    tech_knowledge : Optional[str] = Field(max_length=255)
    tech_skills : Optional[str] = Field(max_length=255)
    id_study_tool : Literal[1,2,3]
    urls: Optional[str] = Field(max_length=255)
    id_referral : Literal[1,2,3,4,5,6,7]