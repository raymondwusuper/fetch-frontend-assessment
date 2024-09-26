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
    <div className="container mt-4">
      <div className="row">
        {images.length > 0 ? (
          images.map((image) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={image.id}>
              <div className="card">
                <img
                  src={image.url}
                  alt="dog"
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No images available for this breed.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
