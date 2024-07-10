import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import HeroSection from '../components/HeroSection';
import FlashSales from '../components/FlashSales';
import Categories from '../components/categories';
import BestSellingProducts from '../components/BestSellingProducts';
import Footer from '../components/Footer';
import Frame from '../assets/frame-600.png';
import Frame2 from '../assets/frame-701.png';
import Frame3 from '../assets/frame-702.png';
import Frame4 from '../assets/frame-703.png';

// Divider component
const Divider = () => (
  <div 
    className="my-4" 
    style={{ height: '2px', backgroundColor: '#ddd' }}
  ></div>
);

const Home = () => {
  return (
    <>
      <HeroSection />
      <FlashSales />
      <Divider />
      <Categories />
      <Divider />
      <BestSellingProducts style={{ marginBottom: '20px' }} />

      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img src={Frame} alt="Frame 600" style={{ maxWidth: '80%' }} />
      </div>

      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <img src={Frame2} alt="Frame 701"  style={{ width: '10%', margin: '10px' }}/>
        <img src={Frame3} alt="Frame 702"  style={{ width: '10%', margin: '10px' }}/>
        <img src={Frame4} alt="Frame 703"  style={{ width: '10%', margin: '10px' }}/>
      </div>

      <Footer />
    </>
  );
};

export default Home;
