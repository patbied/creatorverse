import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav style={{justifyContent: 'center'}}>
    <ul>
        <li><strong><Link to="/">Patricks Creatorverse</Link></strong></li>
    </ul>
    <ul>
        <li><Link to="/add-creator"><button>Add creator</button></Link></li>
    </ul>
</nav>
  )
}

export default Header

