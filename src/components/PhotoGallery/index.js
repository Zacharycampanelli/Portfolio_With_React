import React from 'react'
import Photo from '../Photo'


function PhotoGallery (currentPhoto) {
    const  {
        name,
        tools,
        description
    } = currentPhoto;

  return (
    <section>
        <h1>{name}</h1>
        <p>{tools}</p>
        <p>{description}</p>
       <Photo />
    </section>
  )
}

export default PhotoGallery