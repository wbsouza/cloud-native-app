FROM python:3.8-slim
WORKDIR /app
COPY requirements.txt /app
COPY main.py           /app
RUN pip3 install -r   /app/requirements.txt

EXPOSE 8080
CMD ["python3", "main.py"]
