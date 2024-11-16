import React from 'react';
import img1 from '../../assets/categoryImg/Alfredo Pasta.jpg';
import img2 from '../../assets/categoryImg/Literally Pink Sauce Pasta.jpg';
import img3 from '../../assets/categoryImg/Penne Arrabiata.jpg';
import img4 from '../../assets/categoryImg/Pesto alla Genovese.jpg';
import img5 from '../../assets/categoryImg/Ricetta Ravioli di Patate.jpg';
import img6 from '../../assets/categoryImg/Spaghetti Bolognese.jpg';

const Category = () => {
  return (
    <div className="relative w-full pt-10 max-h-72">
      <div className="w-[95%] mx-auto h-auto shadow-xl shadow-[#ffffff86] bg-white rounded-xl p-6 grid grid-cols-3 gap-4">
        {/* Example Box */}
        {[img1, img2, img3, img4, img5, img6, img4, img5, img6, img4, img5, img6].map((img, index) => (
          <div
            key={index}
            className="relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center group"
          >
            <img src={img} alt={`Food Category ${index + 1}`} className="w-full h-full object-cover rounded-lg" />

            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:bg-gradient-to-t group-hover:from-gray-900 group-hover:via-gray-800 group-hover:to-black group-hover:opacity-60 transition duration-300"></div>

            {/* Category Name */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10 group-hover:translate-y-2 group-hover:scale-105 transition duration-300">
              {[
                'Alfredo Pasta',
                'Literally Pink Sauce Pasta',
                'Penne Arrabiata',
                'Pesto alla Genovese',
                'Ricetta Ravioli di Patate',
                'Spaghetti Bolognese',
                'Literally Pink Sauce Pasta',
                'Ricetta Ravioli di Patate',
                'Spaghetti Bolognese',
                'Literally Pink Sauce Pasta',
                'Ricetta Ravioli di Patate',
                'Spaghetti Bolognese',
              ][index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
