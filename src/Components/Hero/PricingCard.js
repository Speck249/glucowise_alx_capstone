import React from "react";

const PricingCard = ({ title, price, features }) => {
  return (
    <div className='pricing-card'
      style={{ 
        display: 'flex',
        flexDirection: 'column', 
        flexWrap: 'wrap', 
        backgroundColor: '#000', 
        width: '320px', 
        height: '70vh', 
        border: 'none', 
        borderRadius: '1rem' 
    }}>
      <div className='pricing-header' style={{ color: '#602E17' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bolder', textAlign: 'center', marginBottom: '2rem'}}>{title}</h2>
        <p className='price' style={{ fontSize: '0.9rem', color: '#602E17', marginBottom: '2.5rem', backgroundColor: 'burlywood', padding: '1rem' }}>{price}</p>
      </div>
      <ul className='features-list' style={{ color: 'bisque', lineHeight: 3, marginBottom: '2rem' }}>
        {features.map((feature, index) => (
          <li key={index} style={{ fontSize: '0.8rem', listStyleType: 'none' }}>
          <span style={{ marginRight: '0.5rem'}}>&#x2713;</span>{feature}</li>
        ))}
      </ul>
      <button className='btn-select' style={{ width: '50%', margin: '0 auto' }}>Select Plan</button>
    </div>
  );
};

export default PricingCard;