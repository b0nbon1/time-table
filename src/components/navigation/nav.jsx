import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Studying from '../../assets/images/studying.png';

const Navbar = () => (
  <nav className='nav'>
    <div className='logo'>
      <img src={Logo} className='logo-img' alt='logo' />
      <i>TIMEKEEP</i>
    </div>
    <ul>
      <li>
        <NavLink to='/'>
          <i className='fab fa-500px' />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to='/'>
          <i className='fab fa-jedi-order' />
          Marks
        </NavLink>
      </li>
      <li>
        <NavLink to='/'>
          <i className='fas fa-file-medical-alt' />
          Attendances
        </NavLink>
      </li>
      <li>
        <NavLink to='/'>
          <i className='fas fa-inbox' />
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink to='/'>
          <i className='fas fa-calendar-alt' />
          Timetable
        </NavLink>
      </li>
      <li>
        <NavLink to='/'>
          <i className='fas fa-laptop-house' />
          Homeworks
        </NavLink>
      </li>
      <li>
        <NavLink to='/'>
          <i className='fas fa-bullhorn' />
          Notifications
        </NavLink>
      </li>
      <li>
        <NavLink to='/'>
          <i className='fas fa-tools' />
          Settings
        </NavLink>
      </li>
    </ul>
    <img src={Studying} className='class-img' alt='kid studying' />
  </nav>
);

export default Navbar;
