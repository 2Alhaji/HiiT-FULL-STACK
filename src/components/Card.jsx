import React from 'react';
import './card.css';

const Card = ({name, price, gender, colors, link }) => {
  return (
    <div className='main-card'>
      <div className='image'>
          <img src={link} alt="" /> 
        <div className='shoe-name'>
          <h3>{name}</h3>
          <h4>${price}</h4>
        </div>
        <div className='shoe-color'>
          <p>{gender}</p>
          <p>{colors}</p>
        </div>
      </div>
    </div>
  )
}

export default Card