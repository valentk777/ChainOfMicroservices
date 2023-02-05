FROM python:3.11-slim

EXPOSE 5551

COPY . /app

WORKDIR /app
RUN pip install -r requirements.txt

ENTRYPOINT python service.py
