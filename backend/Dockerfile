FROM python:3.11-slim

LABEL maintainer='gabrielokemwa83@gmail.com'
LABEL decription="Development image for Nexus Project"

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DJANGO_ENV=development

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file into the container at /app
COPY /requirements.txt /app/



RUN python -m venv venv
ENV PATH="/app/venv/bin:$PATH"

# Install any needed packages specified in requirements.txt
RUN pip install --upgrade pip && \
    pip install -r requirements.txt



COPY . /app/


EXPOSE 8000


#RUN python manage.py collectstatic --noinput


CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
