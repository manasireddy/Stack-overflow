import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from '../../assest/Globe.svg'

const leftSidebar = () => {
    return (
      <div className='left-sidebar'>
          <nav className='side-nav'>
              <NavLink to='/' className='side-nav-links' activeClassName='active'>
                  <p style={{paddingLeft: "10px"}}>Home</p>
              </NavLink>
              <div className='side-nav-div'>
                  <div><p style={{paddingLeft: "10px"}}>PUBLIC</p></div>
                  <NavLink to='/Questions' className='side-nav-links' activeClassName='active' >
                      <img src={Globe} alt="Globe"  style={{paddingLeft: "10px"}}/>
                      <p style={{paddingLeft: "10px"}}> Questions </p>
                  </NavLink>
                  <NavLink to='/Tags' className='side-nav-links' activeClassName='active'>
                    <p style={{paddingLeft: "10px"}}>Tags</p>
                  </NavLink>
                  <NavLink to='/Users' className='side-nav-links' activeClassName='active'>
                    <p style={{paddingLeft: "10px"}}>Users</p>
                  </NavLink>
              </div>
          </nav>
      </div>
    )
  }
  
  export default leftSidebar