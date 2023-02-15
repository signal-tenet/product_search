/* eslint-disable react/prop-types */
import React from 'react';
import './ProductItem.css';

export default function ProductItem({ prodItem }) {
  return (
    <div className="prod-card">
      <p>
        Name: <span>{prodItem.title}</span>
      </p>
      <p>
        Price: <span>${prodItem.price}</span>
      </p>
      <img src={prodItem.image} alt={prodItem.title}></img>
    </div>
  );
}
