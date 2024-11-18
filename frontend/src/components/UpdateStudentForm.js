import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateStudentForm() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the student data from location state
  const student = location.state?.student || {};

  const [name, setName] = useState(student.name || '');
  const [age, setAge] = useState(student.age || '');
  const [grade, setGrade] = useState(student.grade || '');
  const [email, setEmail] = useState(student.email || '');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/students/${student.name}`
      , {
        name,
        age,
        grade,
        email,
      });
      navigate('/'); // Navigate back to the list after updating
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'étudiant :", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Modifier l'Étudiant</h2>
      <form onSubmit={handleUpdate} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Nom:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Âge:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Classe:</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.updateButton}>
          Mettre à jour
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  updateButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default UpdateStudentForm;
