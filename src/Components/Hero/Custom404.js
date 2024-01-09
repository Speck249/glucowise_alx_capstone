import React from 'react';
import { Link, Link as LinkRouter } from 'react-router-dom';
import ErrorImg from '../../Images/Custom404.jpg';
import PNF from '../../Images/PNF.jpg';


const Error = () => {
  return(
    <>
      <div className='errorContainer' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={ErrorImg} width={800} height={680} alt='404 Page Not Found' />
      </div>
    </>
  );
}

export default Error;