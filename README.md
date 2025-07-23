📊 Employee Salary Prediction System

An end-to-end machine learning web application to predict employee salaries based on user inputs such as years of experience and education level.

This system uses:

✅ Backend: Flask (Python) serving a trained ML model
✅ Frontend: React (Vite) for a fast and interactive UI
✅ Machine Learning Model: Linear Regression (can be upgraded to Random Forest/XGBoost)

🚀 Features -->

1. Predict employee salary based on years of experience and education level.
2. Fast frontend built with Vite + React
3. Flask API serving predictions using a trained ML model
4. Simple and user-friendly interface
5. Easily extendable to include more features (like job role, location, etc.)

📂 Project Structure -->

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

🛠️ Requirements -->

1. Backend (Python)
2. Python 3.8+
3. Flask
4.Flask-CORS
5. scikit-learn
6. pandas
7. pickle-mixin
8. Frontend (Node.js)
9. Node.js 16+
10. Vite
11. React

🌐 How It Works -->
1.User enters years of experience and education level in the frontend UI.
2. Frontend sends a POST request to Flask API.
3. Flask API uses the trained ML model to predict salary.
4. Predicted salary is displayed instantly on the frontend.




