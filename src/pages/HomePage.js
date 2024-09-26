import React, { useState } from 'react';
import BreedSelector from '../components/BreedSelector';
import ImageGallery from '../components/ImageGallery';

const HomePage = () => {
  const [selectedBreedId, setSelectedBreedId] = useState('');

  const handleBreedSelect = (breedId) => {
    setSelectedBreedId(breedId)
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Dog Breed Gallery</h1>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <BreedSelector onBreedSelect={handleBreedSelect} />
        </div>
      </div>
      <ImageGallery breedId={selectedBreedId} />
    </div>
  );
};

export default HomePage;
