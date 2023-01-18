import React from 'react'
import "./navbar.css"
import { BiStoreAlt } from "react-icons/bi";

const NavComponents = () => {
  return (
    <>
      <div className='items'>
        <ul style={{display:"grid", gridTemplateColumns:"repeat(12,1fr)"}}>
            <li>
              <a href='*'> Gifts </a>
            </li>
            <li>
            <a href='*'> Women </a>
            </li>
            <li>
            <a href='*'> Men </a>
            </li>
            <li>
            <a href='*'> Kids </a>
            </li>
            <li>
            <a href='*'> Shoes </a>
            </li>
            <li>
            <a href='*'> Handbags </a>
            </li>
            <li>
            <a href='*'> Jwellery </a>
            </li>
            <li>
            <a href='*'> Beauty </a>
            </li>
            <li>
            <a href='*'> Home </a>
            </li>
            <li>
            <a href='*'> Bed & Bath </a> 
            </li>
            <li>
            <a href='*'> Brands </a>
            </li>
            <li>
            <a href='*'> Clearence </a>
            </li>
        </ul>
        <div className='store'>
        <BiStoreAlt className='icon'/>
        <a href='*'>Find a Store</a>
         </div>
      </div>
    </>
  )
}

export default NavComponents;
