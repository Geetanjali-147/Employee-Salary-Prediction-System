from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

# Load the trained model
with open('salary_prediction_model.pkl', 'rb') as file:
    model = pickle.load(file)

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

@app.route('/predict', methods=['POST'])
def predict_salary():
    try:
        # Get data from frontend
        data = request.get_json()
        experience = data['experience']
        education_level = data['education_level']

        # Create DataFrame for prediction
        input_df = pd.DataFrame({
            'Experience': [experience],
            'Education_Level': [education_level]
        })

        # Encode categorical variable to match training
        input_df = pd.get_dummies(input_df, drop_first=True)
        # Align columns with training features
        expected_cols = ['Experience', 'Education_Level_Masters', 'Education_Level_PhD']
        input_df = input_df.reindex(columns=expected_cols, fill_value=0)

        # Predict salary
        predicted_salary = model.predict(input_df)[0]
        return jsonify({'predicted_salary': round(predicted_salary, 2)})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
