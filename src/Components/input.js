import React from 'react';
import './input.css';

function Input({ title, placeholder, istextarea }) {
  return (
    <>  
      {istextarea ? (
        <div className='text-area'>
            <p>{title}</p>
            <textarea
            placeholder={placeholder}
            rows="10"         // Optional: Controls the number of rows visible
            cols="30"         // Optional: Controls the number of columns visible
            />
        </div>
      ) : (
        <div className='input-container'>
          <p>{title}</p>
          <input type='text' placeholder={placeholder} />
        </div>
      )}
    </>
  );
}

export default Input;
