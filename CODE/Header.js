
import React from 'react' 
import './Header.css'
import img1 from './images/LOGO.jpg';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";     
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    


    return (
        <div className='header'>
            <Link to="/">
              <img 
               className="header__logo"
                src={img1}
               />
            </Link>
            
              
             <div className="header__search">
            <input 
            className="header__searchInput"
            type="text"/>
             <SearchIcon className="header__searchIcon" />
            {/*Logo */}

        </div>
        
        <div className="header__nav">
            <Link to='/login'>
            <div 
            className='header__option'>
                {/*<span className='header__optionLineone'>
                   Hello Guest
                </span>*/}
               
                <span className='header__optionLineTwo'>
                   SIGN IN
                </span>
            </div>
            </Link>
            {/*<div className='header__option'>
            <span className='header__optionLineone'>
                  Returns
                </span>
                <span className='header__optionLineTwo'>
                   & Orders
                </span>
            </div>
            <div className='header__option'>
            <span className='header__optionLineone'>
                   your
                </span>
                <span className='header__optionLineTwo'>
                   Movies
                </span>
            </div>*/}

        <Link to="/checkout">
          <div className="header__optionBasket">
             <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
               {basket?.length}
              </span>
          </div>
        </Link>
            


        </div>
    </div>
            
    );
}

export default Header;
