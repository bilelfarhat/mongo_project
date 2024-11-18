import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm'; // Créez ce composant si nécessaire
import UpdateStudentForm from './components/UpdateStudentForm';
import StudentList from './components/StudentList'; // Liste principale

function App() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: '70px' }}> 
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudentForm />} />
          <Route path="/update" element={<UpdateStudentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
