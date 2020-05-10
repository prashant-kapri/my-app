import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
  <header>
    <nav >
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/Registration'>Registration</Link></li>
        <li><Link to='/LoginForm'>LoginForm</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
