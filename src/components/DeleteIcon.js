import React from 'react';
import deleteIconImage from '../assets/icon/Close.svg'

function DeleteIcon({ onDelete }) {
  return (
      <button className="delete-icon-btn" onClick={onDelete}>
          <img src={deleteIconImage} alt="Delete" className="close-icon"/>
      </button>
  );
}


export default DeleteIcon;
