import React from 'react';
import AnimalCard from './AnimalCard';
import './AnimalList.css';

const AnimalList = ({ darkMode }) => {
  const animalNumbers = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div className={`animal-list-container ${darkMode ? 'dark' : 'light'}`}>
      {animalNumbers.map((animalNumber) => (
        <AnimalCard key={animalNumber} animalNumber={animalNumber} />
      ))}
    </div>
  );
};

export default AnimalList;
