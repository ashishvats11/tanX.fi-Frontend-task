import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='bg-blue-500 flex items-center justify-between p-4 '>
      <div className='text-3xl text-white font-serif ml-40 cursor-pointer'><Link to='/'>ShopKart.</Link></div>
      <div className='flex gap-4 mx-10 text-white cursor-pointer' >
        <ul className='flex gap-8 cursor-pointer'>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/login'>Login </Link></li>
            
        </ul>
        <div>🛒</div>
      </div>
      
    </div>
  )
}

export default Nav
