import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order Your Favouraite Food Here</h2>
            {/* <p>choose from a diverse menu featuring a delectable array of dishes crafting with the finest team . </p> */}
            <p> Choose from a diverse menu featuring a deletable array of dishes
          crafted with the finest ingredients culinary expertise. Our mission is
          to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header
