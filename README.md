## Installation

1. **Clone the Repository**: Start by cloning this repository to your local machine using Git.

   ```bash
   git clone https://github.com/Okemwag/luxconsult.git
   ```

2. **Backend Setup**:

   a. Change directory to the backend folder:

   ```bash
   cd backend
   ```

   b. Create a virtual environment (recommended):

   ```bash
   virtualenv venv
   ```

   c. Activate the virtual environment:

   - On Windows:

   ```bash
   venv\Scripts\activate
   ```

   - On macOS and Linux:

   ```bash
   source venv/bin/activate
   ```

   d. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. **Frontend Setup**:

   a. Change directory to the frontend folder:

   ```bash
   cd ../frontend
   ```

   b. Install Node.js dependencies using npm or Yarn:

   ```bash
   npm install
   # or
   yarn
   ```

## Running the Project

1. **Backend**:

   a. Make migrations and apply them to the database:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

   b. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

   The Django backend should now be running at `http://localhost:8000/`.

2. **Frontend**:

   a. Change directory to the frontend folder (if not already there):

   ```bash
   cd ../frontend
   ```

   b. Start the React development server:

   ```bash
   npm start
   # or
   yarn start
   ```

   The React frontend should now be running at `http://localhost:3000/`.

Access the project in your web browser and see the integrated React frontend and Django backend in action!
