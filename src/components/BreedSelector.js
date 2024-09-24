import React, { useEffect, useState } from 'react';
import { getBreeds } from '../api/dogApi';

const BreedSelector = ({ onBreedSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchBreeds = async () => {
      const breedData = await getBreeds();
      setBreeds(breedData);
    };
    fetchBreeds();
  }, []);

  const handleBreedChange = (e) => {
    const breedId = e.target.value;
    setSelectedBreed(breedId);
    onBreedSelect(breedId); 
  };

  return (
    <select value={selectedBreed} onChange={handleBreedChange}>
      <option value="">Select a breed</option>
      {breeds.map((breed) => (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
};

export default BreedSelector;
