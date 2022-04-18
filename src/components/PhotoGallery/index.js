import React from 'react'
import Photo from '../Photo'


function PhotoGallery (currentPhoto) {
    const  {
        name,
        tools,
        description
    } = currentPhoto;

  return (
    <section id="my_work" className="portfolio">
      <div className="my_portfolio container-fluid">
        <h3 className="section_title">My Work</h3>
        
{/* 
        <h1>{name}</h1>
        <p>{tools}</p>
        <p>{description}</p> */}
       <Photo />
       </div>
    </section>
  )
}

export default PhotoGallery