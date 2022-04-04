import { faBars, faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-indigo-100'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <FontAwesomeIcon icon={faCross}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
            </div>
            <ul  className={`md:flex md:text-lg md:font-bold md:py-6 justify-center absolute md:static bg-indigo-100 w-full duration-500 ease-in ${open ? 'top-6': 'top-[-120px]'}`}>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/reviews">REVIEWS</Link></li>
                <li><Link to="/dashboard">DASHBOARD</Link></li>
                <li><Link to="/blogs">BLOGS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;