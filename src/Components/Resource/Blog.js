import React from "react";
import headerImg from '../../Images/Bowl.jpg';
import parImg from '../../Images/Protein.jpg';

const Blog = () => {
  const handleTop = () => {
    window.scrollTo( { top: 0, behavior: 'smooth'} )
  }

  return (
    <div className="blogpageContainer" style={{ backgroundColor: '#000'}}>
    <div className="blog-container" 
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem', 
        color: 'burlywood'}}>

      <h1 className="blog-title" 
        style={{ 
          fontSize: '3rem',
          fontWeight: 'bolder',
          marginTop: '2rem',
          padding: '1rem',
          textAlign: 'center' }}>Vitality in a Bowl</h1>

      <h2 className="blog-subtitle" 
        style={{
          fontSize: '0.9rem',
          textAlign: 'center',
          fontWeight: 'lighter',
          marginBottom: '2rem' }}>The Crucial Role a Balanced and Nourishing Meal Plays in Fighting Illness</h2>

      <div className="blog-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center' }}>

        <img className="blog-image" src={headerImg} alt="Food" 
          style={{
            width: '100%',
            maxHeight: '500px', 
            objectFit: 'cover', 
            borderRadius: '10px', 
            marginBottom: '2rem' }} />

        <div className="blog-content" style={{ textAlign: 'justify', lineHeight: 1.7 }}>
          <p style={{ marginTop: '1rem' }}>
          A balanced and nourishing meal is the cornerstone of a healthy lifestyle." These words resonate profoundly when we consider
          the vital role that food plays in our overall well-being. In the hustle and bustle of modern life, it is easy to overlook the
          significance of what we put on our plates. However, the truth remains that a well-balanced and nourishing meal is not just a matter
          of satisfying our hunger; it is a powerful weapon in the battle against illness. Let us explore how the right combination of nutrients
          and wholesome ingredients can boost our vitality and fortify our bodies against diseases.
          </p>

          <p style={{ marginTop: '1rem' }}>
          In the words of renowned nutritionist Michael Pollan, "Don't eat anything your great-grandmother wouldn't recognize as food." This 
          simple advice encapsulates the essence of a balanced and nourishing meal. Opting for whole, unprocessed foods such as fruits, vegetables,
          lean proteins, and whole grains ensures that we consume a wide range of essential nutrients, including vitamins, minerals, and antioxidants.
          These nutrients are the building blocks of our immune system, helping us fight off infections and diseases.</p>

          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          A balanced meal also strikes a harmonious chord between macronutrients – proteins, carbohydrates, and fats. Proteins, often referred to as the
          "building blocks of life," are crucial for repairing and maintaining our body tissues. Carbohydrates provide energy, fueling our daily activities,
          while healthy fats, such as those found in avocados and nuts, support brain function and aid in nutrient absorption. A well-rounded meal that includes
          a balance of these macronutrients ensures that our bodies receive the fuel they need to function optimally.</p>

          <img className="blog-image" src={parImg} alt="Paleo Food"
            style={{
              width: '100%', 
              maxHeight: '500px', 
              objectFit: 'cover', 
              borderRadius: '10px',
              marginBottom: '1rem' }} />

          <p style={{ marginTop: '1rem' }}>
            Embracing the concept of "eating the rainbow" is another cornerstone of a nourishing meal. Vibrantly colored fruits and vegetables are packed with phytochemicals,
            which possess powerful antioxidant and anti-inflammatory properties. These compounds protect our cells from damage, lower the risk of chronic diseases, and promote
            overall well-being. As the saying goes, "Let food be thy medicine." By incorporating a variety of colorful produce into our meals, we amplify our body's natural defense mechanisms.
          </p>

          <p style={{ marginTop: '1rem' }}>
          The importance of a balanced and nourishing meal becomes even more apparent when we consider its impact on our gut health. A healthy gut microbiome, consisting of trillions of
          beneficial bacteria, is crucial for a robust immune system. Fermented foods like yogurt, sauerkraut, and kefir support the growth of these beneficial bacteria, promoting a healthy balance
          in our gut. As Hippocrates, the father of medicine, famously said, "All disease begins in the gut." By prioritizing gut health through nourishing meals, we can fortify our bodies against
          various illnesses.
          </p>

          <p style={{ marginTop: '1rem' }}>
          The significance of a balanced and nourishing meal in fighting illness cannot be overstated. By embracing wholesome, unprocessed foods, striking a balance between macronutrients, incorporating
          a variety of colorful produce, and prioritizing gut health, we empower our bodies to ward off diseases and maintain optimal vitality. As we savor our meals, let us remember that each bite is an 
          opportunity to nourish our bodies and enhance our overall well-being. By making informed choices and embracing the power of a nutritious meal, we embark on a journey towards a healthier and more vibrant life.
          </p>

          <p style={{ marginTop: '1rem' }}>Choose wisely, for vitality lies in the bowl before you.</p>
          </div>
      </div>

      <p onClick={handleTop} style={{ cursor: 'pointer', marginTop: '3rem', color: '#006400', textAlign: 'center', fontWeight: 'bold' }}>Back to Top</p>
    </div>
    </div>
  );
};

export default Blog;