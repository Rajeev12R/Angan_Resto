import React from 'react';
import bg from '../assets/menuBg.jpeg';
import Menubar from '../components/navbar/Menubar';
import Category from '../components/category/Category';

const Menu = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <img className='absolute top-0 left-0 w-full h-full object-cover' src={bg} alt="Background" />
      
      {/* Menubar Component */}
      <Menubar />

      {/* Category Section */}
      <div className='absolute w-full'>
        <Category />
      </div>
    </div>
  );
}

export default Menu;
