import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { FaPlus } from 'react-icons/fa'; // Import an icon

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/students`);
      setStudents(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des étudiants :", error);
    }
  };

  const deleteStudent = async (name) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/students/${name}`);
      fetchStudents();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'étudiant :", error);
    }
  };

  const handleEdit = (student) => {
    navigate('/update', { state: { student } }); // Pass student data via state
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Liste des Étudiants</h2>

      {/* Add Button */}
      <button style={styles.addButton} onClick={() => navigate('/add')}>
        <FaPlus style={styles.icon} /> Ajouter un étudiant
      </button>

      <ul style={styles.list}>
        {students.map((student, index) => (
          <li key={index} style={styles.listItem}>
            <div>
              <strong>Nom :</strong> {student.name} <br />
              <strong>Âge :</strong> {student.age} ans <br />
              <strong>Classe :</strong> {student.grade} <br />
              <strong>Email :</strong> {student.email}
            </div>
            <div>
              <button
                style={styles.editButton}
                onClick={() => handleEdit(student)}
              >
                Modifier
              </button>
              <button
                style={styles.deleteButton}
                onClick={() => deleteStudent(student.name)}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
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
  addButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    marginRight: '8px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#fff',
    margin: '10px 0',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
  },
  editButton: {
    backgroundColor: '#f39c12',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default StudentList;
