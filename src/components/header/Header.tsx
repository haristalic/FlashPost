import { ChangeEvent, useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props:any) => {
   const handleInputChange = (e: any) => {
    props.setInput(e.target.value);
   };
   
  return (
    <nav className="navigation-bar">
      <img src="../../../public/Logo.svg" />
      <NavLink to="/">Posts</NavLink>
      <NavLink to="/images">Images</NavLink>
      <input
        placeholder="Search...."
        type="text"
        value={props.input}
        onChange={handleInputChange}
      />
    </nav>
  );
};

export default Header;
