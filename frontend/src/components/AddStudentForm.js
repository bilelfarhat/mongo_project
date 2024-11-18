import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

function AddStudentForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [email, setEmail] = useState(''); // Ajout du champ email

  const navigate = useNavigate(); // Hook for navigation

  const addStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/students`, { name, age, grade, email });
      setName('');
      setAge('');
      setGrade('');
      setEmail(''); // Réinitialiser le champ email après soumission
      navigate('/'); // Redirect to the list page after adding the student
    } catch (error) {
      console.error(error.response?.data?.error || "Erreur lors de l'ajout de l'étudiant");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Ajouter un Étudiant</h2>
      <form onSubmit={addStudent} style={styles.form}>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Âge"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Classe"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Gestion du champ email
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Ajouter</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
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
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
};

export default AddStudentForm;
