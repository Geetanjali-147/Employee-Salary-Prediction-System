import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('Bachelors');
  const [salary, setSalary] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        experience: parseFloat(experience),
        education_level: education
      });
      setSalary(response.data.predicted_salary);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Employee Salary Predictor</h1>
      <form onSubmit={handleSubmit}>
        <label>Experience (Years):</label>
        <input
          type="number"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />

        <label>Education Level:</label>
        <select value={education} onChange={(e) => setEducation(e.target.value)}>
          <option value="Bachelors">Bachelors</option>
          <option value="Masters">Masters</option>
          <option value="PhD">PhD</option>
        </select>

        <button type="submit">Predict Salary</button>
      </form>

      {salary !== null && (
        <h2>Predicted Salary: ₹{salary}</h2>
      )}
    </div>
  );
}

export default App;
