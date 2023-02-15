/* eslint-disable react/prop-types */
import React from 'react';
import './Search.css';

export default function Search({ value, onChange, onClick }) {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        placeholder="search here"
        value={value}
        onChange={onChange}
      />
      <button type="submit" onClick={onClick}>
        Submit
      </button>
    </div>
  );
}
