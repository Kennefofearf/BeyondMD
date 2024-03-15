import React from 'react'
import './Navbar.css';

// Creates a Navbar with the page names. Uses an unordered list

function Navbar() {

return <nav className="nav">
    <ul className="list">
        <li>
        <a href="/Home" className='home'>Home</a>
        </li>
        <li>
        <a href="/Resume" className='resume'>Resume</a>
        </li>
        <li>
        <a href="/Api" className='api'>API</a>
        </li>
    </ul>
</nav>

}
export default Navbar;