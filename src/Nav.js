import React from 'react';
import { NavLink } from 'react-router-dom'

const routes = [
  { to: '/', label: 'projects' },
  { to: '/about', label: '?' },
];

const Nav = ({location}) => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
  )

  return (
    <div className='nav-wrap'>
      <div className='nav-inner'>
        { links }
      </div>
    </div>
  );
}

export default Nav
