import React from 'react'
import item from '../utils.js/db.json';

const Products = () => {
  const cat_items= item.map(items=>{
    return (
        
        <div key={items.id} className=' m-3 lg:flex lg:flex-col justify-center relative'>
        <img  src={items.img} className={`rounded-2xl hover:scale-100 transition ease-in-out duration-500 h-96 w-96 scale-90 cursor-pointer`} />
        
        </div>
       
    )
})
  return (
    <div>
      <div className='grid grid-cols-3 gap-7'>
        <div className='flex sm:flex-row  '>
          {cat_items}
            
        </div>
      </div>
      
    </div>
  )
}

export default Products
