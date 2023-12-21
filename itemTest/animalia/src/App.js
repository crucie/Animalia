import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AnimalList from './components/AnimalList';
import AnimalDetails from './components/AnimalDetails';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className = {`head ${darkMode ? 'dark' : 'light'}`}>
      <header>
      <h1>ANIMALIA</h1>
      </header>
      </div>
      <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
        <header>
          
          <label className="switch">
            
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>
        </header>

        <Routes>
          <Route
            path="/"
            element={<AnimalList darkMode={darkMode} />}
          />
          <Route
            path="/animal/:id"
            element={<AnimalDetails darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
