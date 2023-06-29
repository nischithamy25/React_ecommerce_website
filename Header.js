import React from 'react'
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <div className="header">
        <Link to="/" style={{textDecoration:"none"}}>
            <div className="header_logo">
                <StorefrontIcon className='header_logoImage' fontSize='large'/>
                <h2 className="header_logoTitle">eShop</h2>
            </div>
            </Link>

            <div className="header_search">
            <input type="text" className='header_searchInput'></input>
            <SearchIcon className='header_searchIcon'></SearchIcon>

            </div>
        
            <div className="header_nav"></div>
            <div className="nav_item">
            <span className="nav_itemLineOne">Hello Guests</span>
                <span className="nav_itemLineTwo">sign in</span>
            </div>
            <div className="nav_item">
            <span className="nav_itemLineOne">youre</span>
                <span className="nav_itemLineTwo">shop</span>
            
            </div>
            <Link to="/checkout" style={{textDecoration:"none"}}>
                <div className="nav_itemBasket">
                    <ShoppingBasketIcon  />
                        <span className="nav_itemLineTwo nav_itemCount">0</span>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Header