import React from 'react'
import "./Header.css"
import {Link, nav} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { LocationOn} from '@material-ui/icons'

import SearchBar from './SearchBar'

function Header() {
    return (
                <nav className="header">
                    {/*Logo on the left */} 
                    <Link to="/">
                            <img 
                                className="header_logo"
                                src={require("../assets/logo.png")} 
                                alt=""
                            />
                        
                    </Link>
                    
                    {/*Search Box */}
                    <Link className="header_search">
                        
                        <LocationOn className="header_location" />
                        <SearchBar type="text"  placeholder="Search by Location" className="header_searchInput" placeholder="Search by Location" />
                        
                        {/*<SearchIcon className="header_searchIcon" />*/}
                        <input type="text" placeholder="Search by Name" className="header_searchInput" />
                        <SearchIcon className="header_searchIcon" />
                    </Link>
                      {/* 3links= login, contact, */}
                      <div className="header_nav">
                          <Link to="/Login" className="header_link">
                                <div className="header_option">  
                                    <span className="header_optionLineOne">Hello</span>
                                    <span className="header_optionLineTwo">Sign In</span>
                                </div> 
                          </Link>
                          <Link to="/Sign Up" className="header_link">
                                <div className="header_option">  
                                
                                    <span className="header_optionLineTwo">Sign up</span>
                                </div> 
                          </Link>
                          <Link to="/Oreders" className="header_link">
                                <div className="header_option">  
                                <span className="header_optionLineOne">Review &</span>
                                    <span className="header_optionLineTwo">Orders</span>
                                </div> 
                          </Link>
                          <Link to="/Contact Details" className="header_link">
                                <div className="header_option">  
                                    <span className="header_optionLineTwo">contact us</span>
                                    
                                </div> 
                          </Link>
                      </div>

                        {/*Bascket icon with number */}
                       <Link to="/checkout" className="header_link">
                            <div className="header_optionBasket">
                                <ShoppingBasketIcon />
                                <span className="header_optionLineTwo header_basketCount">0</span>
                            </div>
                       </Link> 
                   
                 </nav>
            ); 
}

export default Header;
