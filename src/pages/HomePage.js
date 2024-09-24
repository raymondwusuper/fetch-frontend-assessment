import React, { useState } from 'react';
import BreedSelector from '../components/BreedSelector';
import ImageGallery from '../components/ImageGallery';

const HomePage = () => {
  const [selectedBreedId, setSelectedBreedId] = useState('');

  return (
    <div>
      <h1>Dog Breed Gallery</h1>
      <BreedSelector onBreedSelect={setSelectedBreedId} />
      {selectedBreedId && <ImageGallery breedId={selectedBreedId} />}
    </div>
  );
};

export default HomePage;
