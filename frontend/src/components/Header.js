import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import de l'icône Home

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img 
          src="image.png" // Remplacez par le chemin de votre logo
          alt="App Logo" 
          style={styles.logo} 
        />
        <Link to="/" style={styles.iconLink}>
            <span style={styles.appName}>Gestion Étudiants</span> {/* Nom de l'application */}
        </Link>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#007bff',
    padding: '10px 20px',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  appName: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
  },
  nav: {
    display: 'flex',
    alignItems: 'center', // Ensures vertical alignment of the icon
  },
  iconLink: {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '24px', // Taille de l'icône
    marginLeft: '10px', // Add spacing if needed
  },
};

export default Header;
