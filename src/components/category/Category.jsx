import React from 'react';
import img1 from '../../assets/categoryImg/Alfredo Pasta.jpg'
import img2 from '../../assets/categoryImg/Literally Pink Sauce Pasta.jpg'
import img3 from '../../assets/categoryImg/Penne Arrabiata.jpg'
import img4 from '../../assets/categoryImg/Pesto alla Genovese.jpg'
import img5 from '../../assets/categoryImg/Ricetta Ravioli di Patate.jpg'
import img6 from '../../assets/categoryImg/Spaghetti Bolognese.jpg'

const Category = () => {
  return (
    <div className='relative w-full pt-10 max-h-72'>
      <div className='w-[95%] mx-auto h-auto shadow-xl shadow-[#ffffff86] bg-white rounded-xl p-6 grid grid-cols-3 gap-4'>
        {/* Box 1 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img1} alt="Food Category 1" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Alfredo Pasta
          </div>
        </div>

        {/* Box 2 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img2} alt="Food Category 2" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Literally Pink Sauce Pasta
          </div>
        </div>

        {/* Box 3 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img3} alt="Food Category 3" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Penne Arrabiata
          </div>
        </div>

        {/* Box 4 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img4} alt="Food Category 4" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Pesto alla Genovese
          </div>
        </div>

        {/* Box 5 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img5} alt="Food Category 5" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Ricetta Ravioli di Patate
          </div>
        </div>

        {/* Box 6 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img6} alt="Food Category 6" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Spaghetti Bolognese
          </div>
        </div>
        {/* Box 6 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img6} alt="Food Category 6" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Spaghetti Bolognese
          </div>
        </div>
        {/* Box 6 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img6} alt="Food Category 6" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Spaghetti Bolognese
          </div>
        </div>
        {/* Box 6 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img6} alt="Food Category 6" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Spaghetti Bolognese
          </div>
        </div>
        {/* Box 6 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img6} alt="Food Category 6" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Spaghetti Bolognese
          </div>
        </div>
        {/* Box 6 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img6} alt="Food Category 6" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Spaghetti Bolognese
          </div>
        </div>
        {/* Box 6 */}
        <div className='relative w-full h-28 bg-gray-100 rounded-lg shadow-md flex items-center justify-center'>
          <img src={img6} alt="Food Category 6" className="w-full h-full object-cover rounded-lg" />
          
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          
          {/* Category Name */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10">
            Spaghetti Bolognese
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
