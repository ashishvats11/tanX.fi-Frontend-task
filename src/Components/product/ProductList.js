import React from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from '../../utils.js/db.json';

const Products = () => {
  const navigate = useNavigate();
  const cat_items = jsonData.products.map(items => {
    return (
      <div key={items.id} className='bg-white flex flex-col gap-2 shadow-lg px-2 cursor-pointer'
      onClick={() => navigate(`/products/${items.id}`)} >
      
        <img
          src={items.image}
          className='cursor-pointer rounded-lg  object-cover '
          style={{ height: '200px' }}  
          alt={`Product ${items.id}`}
        />
       
        <p className='text-slate-400'>{items.title}</p>
        <p className='text-slate-400'>{`₹${items.amount}`}</p>
        <div>
        <p className='bg-green-500 text-white inline-block px-1 rounded-md '>{items.rating}</p>
        </div>
        <div className='flex justify-between px-1 pb-1'>
          <p onClick={()=>{alert('added to favs')}} className='cursor-pointer'>🖤</p>
          <p className='cursor-pointer'>🛒</p>
        </div>
        </div>
      
    );
  });

  return (
    <div className='m-10 '>
      <div className='grid grid-cols-5 gap-7 '>{cat_items}</div>
    </div>
  );
};

export default Products;
