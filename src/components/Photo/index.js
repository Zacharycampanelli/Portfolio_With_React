import React from 'react'
import photo from '../../assets/images/spellingpractice.png'

function Photo() {
  return (
    <div>
    <img src={photo} 
    alt='example'
    className='img-thumbnail mx-1'
    />
</div>
  )
}

export default Photo