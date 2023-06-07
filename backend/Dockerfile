FROM python:3.10-alpine

WORKDIR /web_app

COPY .env /web_app
COPY requirements.txt /web_app

RUN pip install virtualenv

RUN virtualenv venv

RUN source venv/bin/activate

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

ADD app/ /web_app/app

CMD ["uvicorn", "app.app:app", "--host", "0.0.0.0", "--port", "8000"]