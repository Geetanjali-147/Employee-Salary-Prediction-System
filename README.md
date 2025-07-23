📊 Employee Salary Prediction System
An end-to-end machine learning web application to predict employee salaries based on user inputs such as years of experience and education level.

This system uses:
✅ Backend: Flask (Python) serving a trained ML model
✅ Frontend: React (Vite) for a fast and interactive UI
✅ Machine Learning Model: Linear Regression (can be upgraded to Random Forest/XGBoost)

🚀 Features
Predict employee salary based on years of experience and education level

Fast frontend built with Vite + React

Flask API serving predictions using a trained ML model

Simple and user-friendly interface

Easily extendable to include more features (like job role, location, etc.)

📂 Project Structure
perl
Copy
Edit
salary-prediction-system/
│
├── backend/
│   ├── app.py                  # Flask API
│   ├── salary_prediction_model.pkl  # Trained ML model
│   └── requirements.txt        # Python dependencies
│
├── frontend/
│   ├── src/
│   │   └── App.jsx             # Main React component
│   ├── package.json            # Node.js dependencies
│   └── vite.config.js          # Vite configuration
│
└── README.md                   # Project documentation

🛠️ Requirements
Backend (Python)
Python 3.8+

Flask

Flask-CORS

scikit-learn

pandas

pickle-mixin

Frontend (Node.js)
Node.js 16+

Vite

React

Axios

📦 Installation and Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/salary-prediction-system.git
cd salary-prediction-system
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
pip install -r requirements.txt
python app.py
This will start the Flask API at: http://127.0.0.1:5000

3️⃣ Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
This will start the Vite React frontend at: http://localhost:5173

🌐 How It Works
User enters years of experience and education level in the frontend UI.

Frontend sends a POST request to Flask API.

Flask API uses the trained ML model to predict salary.

Predicted salary is displayed instantly on the frontend.

🔮 Example Prediction
Experience (Years)	Education Level	Predicted Salary (₹)
5	Bachelors	₹6,50,000
10	Masters	₹12,00,000
15	PhD	₹18,50,000

📈 Future Improvements
Add more features: job role, location, skillset

Use advanced ML models (Random Forest, XGBoost, Neural Networks)

Deploy on cloud (Heroku, AWS, or Netlify)

Add authentication for HR access


