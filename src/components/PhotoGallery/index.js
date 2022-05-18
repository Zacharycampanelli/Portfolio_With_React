import React from 'react';
import Photo from '../Photo';

const PhotoGallery = (currentPhoto) => {
  return (
    <section id="my_work" className="portfolio">
      <div className="my_portfolio container-fluid">
        <h3 className="section_title">My Work</h3>

        <Photo />
      </div>
    </section>
  );
};

export default PhotoGallery;
