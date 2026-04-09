// MyNavBar.jsx component ti eibhabe thakte hobe
import React from 'react';
import { NavLink } from 'react-router';

const MyNavBar = ({ to, children }) => {
  const navLinkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-all duration-300 font-medium inline-block ${
      isActive
        ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
        : "text-gray-300 hover:text-white hover:bg-gray-700"
    }`;

  return (
    <NavLink to={to} className={navLinkStyles}>
      {children}
    </NavLink>
  );
  
};

export default MyNavBar;