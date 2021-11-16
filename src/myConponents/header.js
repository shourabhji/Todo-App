import React from 'react';
import './navbar.css';
const Header = (props) => {
    return (
        <div className="navbar">
          <span id="logo">To-Do List</span>
           {/* <span id="about" onClick={()=>{window.open("about","_self") }}>about</span> */}
         </div>
    );
}

export default Header;
