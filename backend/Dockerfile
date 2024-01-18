# Pull base image
FROM python:3.11-alpine

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PORT 8000

# Create and set work directory called `app`

WORKDIR /app

# Install dependencies
COPY requirements.txt .

RUN set -ex && \
    pip install --upgrade pip && \
    pip install -r /app/requirements.txt 


# Copy local project
COPY . .

# Expose port 8000
EXPOSE $PORT


CMD python manage.py runserver 0.0.0.0:$PORT