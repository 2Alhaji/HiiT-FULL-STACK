import React from 'react';
import './header.css';
import { SiNike } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";





const Header = () => {
  return (
    <div>
      <div className='nav-card'> 
        <div className='search'>
         <span><SiNike/> </span>
          <div className='user'> 
            <input type="text" placeholder='Search' />
            <span><FaRegUser /> <BsBasket3 /></span>
            </div>
        </div>
      </div>
      <ul className='shop'>
        <li>Free shipping and refund</li>
        <li>Expulsion 24h</li>
        <li>-15% on the first purchase</li>
      </ul>
      <div className='sort'>
        <h1>lifestyle Sneakers</h1>
        <select name="" id="">
            <option value="sort-by">sort-by</option>
            <option value="">by-name</option>
            <option value="">by-type</option>
            <option value="">by-size</option>
        </select>
      </div>
    </div>                                               
  )
}

export default Header