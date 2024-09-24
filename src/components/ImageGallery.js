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
    <div className="image-gallery">
      {images.length > 0 ? (
        images.map((image) => (
          <img key={image.id} src={image.url} alt="dog" className="dog-image" />
        ))
      ) : (
        <p>No images available for this breed.</p>
      )}
    </div>
  );
};

export default ImageGallery;
