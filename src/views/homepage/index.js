import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function HomePage() {

  let navigate = useNavigate()
  function navigateToPage() {
    navigate('/Motivation');
  }

  return (
    <body className='body'>
      <div className="back">
        <div className="guys"></div>
        <button onClick={navigateToPage} className="button" > <span>INICIAR!</span> </button>
      </div>
    </body>
  );
}

export default HomePage;
