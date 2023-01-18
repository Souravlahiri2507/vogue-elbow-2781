import React from 'react'
import "./navbar.css"
import { BsPlusSquare } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
            <h1>
                <span>B</span>elk
                <span>C</span>art
            </h1>
        </div>
        <div className='input-box'>
            <input placeholder='what can we help you find?'/>
        </div>
        <div className='menu-link'>
            <ul>
                <li>
                    <BsPlusSquare className='icon'/>
                    <span>Belk Rewards+</span>
                </li>
                <li>
                    <BsCashCoin className='icon'/>
                    <span>Coupons</span>
                </li>
                <li>
                    <BsFillPersonLinesFill className='icon'/>
                    <a href='*'>My Account</a>
                </li>
                <hr/>
                <li>
                    <BsFillCartFill className='icon'/>
                    <a href='*' style={{paddingLeft:"35px"}}>Bag</a>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
