FROM python:3.11-slim-buster



# Set working directory
WORKDIR /usr/src/backend

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies


# Install Python dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


# Copy the entire backend directory to the container
COPY . .

# Command to start the Django app
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myapp.wsgi:application"]