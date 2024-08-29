import React from 'react';
import { Link } from 'react-router-dom';
import './BrotherList.css';

export default function BrotherList({ brothers }) {
  return (
    <div className="brother-grid-container">
      {brothers.map((brother) => (
        <Link 
          key={brother.name} 
          to={`/meet-us/${brother.name.replace(/\s+/g, '')}`} 
          className="brother-grid-item"
        >
          <img src={brother.photo} alt={brother.name} className="brother-photo" />
          <p className="brother-name">{brother.name}</p>
        </Link>
      ))}
    </div>
  );
}
