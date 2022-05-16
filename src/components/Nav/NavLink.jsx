import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  const { to, cName, desc, callback } = props;
  const useA = (props.useA != null) ? props.useA : false;
  const contents = (
    <div className={`NavItem ${cName}`} onClick={props.closeMenu}>
      {props.children}
      <span className='NavItemDescription h7'>{desc}</span>
    </div>
  );
  if (useA) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {contents}
      </a>
    );
  }
  return (
    <Link to={to} onClick={(e)=>{ if(callback) callback() }}>
      {contents}
    </Link>
  );
}

export default NavLink;