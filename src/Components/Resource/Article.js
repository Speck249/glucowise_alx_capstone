import React from "react";
import headerImg from '../../Images/Sunset.jpg';

const Article = () => {
  return (
    <div className="blog-container"
      style={{
         maxWidth: '950px',
         margin: '0 auto',
         padding: '2rem',
         backgroundColor: 'burlywood'
      }} >
      <h1 className="blog-title" style={{ fontSize: '3rem', marginTop: '3rem', padding: '2rem', textAlign: 'center', marginBottom: '1rem'}}>Exploring the Beauty of Nature: A Journey of Reflection</h1>
      <div className="blog-section" style={{ display: 'flex', alignItems: 'center' }}>
        <img className="blog-image"  src={headerImg} alt="Sunset" style={{ width: '50%', maxHeight: '400px', objectFit: 'cover', marginRight: '20px' }}/>
        <div className="blog-content" style={{ width: '50%', textAlign: 'justify', lineHeight: 1.5}}>
          <p style={{ textAlign: 'justify'}}>As the sun sets on the horizon, painting the sky in vibrant hues, we embark on a journey to explore the breathtaking beauty of nature.
          Join us as we dive into a world of awe-inspiring landscapes, immersive experiences, and profound reflections.</p>
          <blockquote className="blog-quote" 
            style={{
              fontSize: '1rem',
              fontStyle: 'italic',
              margin: '20px 0'
            }}
           >
          "In every walk with nature, one receives far more than he seeks." - John Muir </blockquote>

          <p>Nature has a way of captivating our senses and stirring our souls. It reminds us of the magnificence and interconnectedness of all
          living things. From towering mountains to serene meadows, every corner of the natural world holds a story waiting to be discovered.</p>
          <br />
          <p>Through captivating images, inspiring quotes, and heartfelt narratives, we invite you to rediscover the magic that lies within the embrace
          of nature.Let us embark on this extraordinary journey together, where we will find solace, inspiration, and a deeper connection to ourselves 
          and the world around us.</p>
        </div>
      </div>
    </div>
  );
};

export default Article;