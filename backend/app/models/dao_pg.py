import logging

import psycopg2
from psycopg2 import extras, sql

from app import utils
from app import parameters
from app.schemas import user, form

class DataBasePG:
    
    def __init__(self, hostname, username, port, password, db, schema):

        self.hostname = hostname 
        self.username = username 
        self.port = port 
        self.password = password
        self.db = db
        self.schema = schema

    def __enter__(self):

        try:

            self.db = psycopg2.connect(
                host=self.hostname,
                user=self.username,
                password=self.password,
                port=self.port,
                dbname=self.db
            )
            self.cursor = self.db.cursor(cursor_factory=extras.RealDictCursor)
            self.cursor.execute(f"set schema '{self.schema}'")

        except Exception as erro:
            logging.error(f"Error database can't connect: {erro}")
            self.db.close()

        else:

            return self.cursor

    def __exit__(self, *args):

        try:

            self.db.commit()
            self.db.close()

        except Exception as erro:

            logging.error(f'Database error: {erro}')
            self.db.close()

        else:

            return self.cursor

class FormDAO:

    @staticmethod
    def create_lead_in_db(form: form.Form) -> bool:
        """
        _summary_
        Args:
            user (object): _description_
        Returns:
            bool: _description_
        """

        query = sql.SQL(
            '''
            insert into forms(full_name, email, cellphone, id_career, has_tech_knowledge, tech_knowledge, tech_skills, id_study_tool, urls, id_referral) 
            values 
            ({full_name}, {email}, {cellphone}, {id_career}, {has_tech_knowledge}, {tech_knowledge}, {tech_skills}, {id_study_tool}, {urls}, {id_referral});
            '''
        ).format(
            full_name=sql.Literal(form.full_name),
            email=sql.Literal(form.email),
            cellphone=sql.Literal(form.cellphone),
            id_career=sql.Literal(form.id_career),
            has_tech_knowledge=sql.Literal(form.has_tech_knowledge),
            tech_knowledge=sql.Literal(form.tech_knowledge),
            tech_skills=sql.Literal(form.tech_skills),
            id_study_tool=sql.Literal(form.id_study_tool),
            urls=sql.Literal(form.urls),
            id_referral=sql.Literal(form.id_referral)
        )

        with DataBasePG(
                hostname=parameters.DB_PG_HOST,
                username=parameters.DB_PG_USERNAME,
                port=parameters.DB_PG_PORT,
                password=parameters.DB_PG_PASSWORD,
                db=parameters.DB_PG_DATABASE,
                schema=parameters.DB_PG_SCHEMA
                ) as cursor:

            try: 
                
                cursor.execute(query)

            except Exception as r:
                
                logging.critical(r)
                return False

            else:

                return True


    @staticmethod
    def verify_if_email_exist(email: str) -> bool:

        query = sql.SQL(
            '''
            select email
            from forms
            where
            email = {email}
            ;
            '''
        ).format(
            email=sql.Literal(email),
        )

        with DataBasePG(
                hostname=parameters.DB_PG_HOST,
                username=parameters.DB_PG_USERNAME,
                port=parameters.DB_PG_PORT,
                password=parameters.DB_PG_PASSWORD,
                db=parameters.DB_PG_DATABASE,
                schema=parameters.DB_PG_SCHEMA
                ) as cursor:

            try: 
                
                cursor.execute(query)

            except Exception as r:
                
                logging.critical(r)
                return False

            else:

                return bool(cursor.fetchall())


    @staticmethod
    def verify_if_cellphone_exist(cellphone: str) -> bool:

        query = sql.SQL(
            '''
            select cellphone
            from forms
            where
            cellphone = {cellphone}
            ;
            '''
        ).format(
            cellphone=sql.Literal(cellphone),
        )

        with DataBasePG(
                hostname=parameters.DB_PG_HOST,
                username=parameters.DB_PG_USERNAME,
                port=parameters.DB_PG_PORT,
                password=parameters.DB_PG_PASSWORD,
                db=parameters.DB_PG_DATABASE,
                schema=parameters.DB_PG_SCHEMA
                ) as cursor:

            try: 
                
                cursor.execute(query)

            except Exception as r:
                
                logging.critical(r)
                return False

            else:

                return bool(cursor.fetchall())