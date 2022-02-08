import React from 'react';
import "./footer.css"

export default function footer() {
  return (
      <div className="footer-container">
          <div className='footer-parent'> 
            <img src={require('../../../assets/img/see.png')} alt='no internet connection' />
          </div>
      </div>
  );
}

