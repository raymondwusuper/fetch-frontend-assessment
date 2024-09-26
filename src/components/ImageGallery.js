import React, { useState, useEffect } from 'react';
import { getBreedImages } from '../api/dogApi';

const ImageGallery = ({ breedId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (breedId) {
      const fetchImages = async () => {
        const imageData = await getBreedImages(breedId);
        setImages(imageData);
      };
      fetchImages();
    }
  }, [breedId]);

  return (
    <div className="row">
      {images.length > 0 ? (
        images.map((image) => (
          <div className="col-md-4 col-sm-6 mb-4" key={image.id}>
            <img src={image.url} alt="dog" className="img-fluid dog-image" />
          </div>
        ))
      ) : (
        <p>No images available for this breed.</p>
      )}
    </div>
  );
};

export default ImageGallery;
