import React from 'react'
import { useParams } from 'react-router-dom';
import jsonData from '../../utils.js/db.json'
const ProductDetail = () => {
    const { productId } = useParams();
    const product = jsonData.products.find(item => item.id.toString() === productId);
    if (!product) {
        return <div>Product not found</div>;
      }
  return (
    <div key={product.id} className='bg-white flex justify-around items-center shadow-lg cursor-pointer px-8 py-6'>
                <div>
                    <img
                    src={product.image}
                    className='cursor-pointer rounded-xl  scale-125  '
                    style={{ height: '200px' }}  
                    alt={`Product ${product.id}`}
                    />
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-4 ' style={{width:'500px'}}>
                    <p className='font-bold text-2xl'>{product.title}</p>
                    <p className='text-justify'>{product.description}</p>
                    <p className='text-4xl font-semibold'>{`₹${product.amount}`}</p>
                    </div>
                    <div className='flex gap-9'>
                        <button className='border-2 border-black p-3 font-medium'>Buy Now</button>
                        <button className='text-white bg-black p-3'>Add to Basket</button>
                    </div>
                </div>
                
                
            </div>
  )
  }

export default ProductDetail
