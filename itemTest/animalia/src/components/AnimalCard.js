import React from 'react';
import { Link } from 'react-router-dom';
import './AnimalCard.css';

const AnimalCard = ({ animalNumber }) => {
  const animalName = getAnimalName(animalNumber);

  return (
    <Link to={`/animal/${animalNumber}`} className="animal-card">
      <div className="icon-container">
        <img src={`icons/${animalName}.svg`} alt={animalName} />
      </div>
    </Link>
  );
};

const getAnimalName = (number) => {
  switch (number) {
    case 1: return 'Elephant';
    case 2: return 'Giraffe';
    case 3: return 'Lion';
    case 4: return 'Penguin';
    case 5: return 'Panda';
    case 6: return 'Kangaroo';
    case 7: return 'Monkey';
    case 8: return 'Tiger';
    case 9: return 'Zebra';
    case 10: return 'Koala';
    default: return '';
  }
};

const getAnimalDescription = (number) => {
  switch (number) {
    case 1: return 'Elephants are the largest land animals.';
    case 2: return 'Giraffes are known for their long necks and distinctive spotted coat.';
    case 3: return 'Lions are powerful carnivores and the only cats that live in groups.';
    case 4: return 'Penguins are flightless birds that live in the Southern Hemisphere.';
    case 5: return 'Pandas are known for their distinctive black-and-white coat.';
    case 6: return 'Kangaroos are marsupials that are native to Australia.';
    case 7: return 'Monkeys are intelligent and highly social animals.';
    case 8: return 'Tigers are the largest cat species and are known for their striped pattern.';
    case 9: return 'Zebras are known for their black and white stripes.';
    case 10: return 'Koalas are marsupials native to Australia.';
    default: return '';
  }
};

export default AnimalCard;
