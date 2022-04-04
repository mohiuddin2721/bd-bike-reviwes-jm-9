import { faBars, faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Link from '../Link/Link';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'HOME', link: '/home'},
        {id: 1, name: 'REVIEWS', link: '/reviews'},
        {id: 1, name: 'DASHBOARD', link: '/dashboard'},
        {id: 1, name: 'BLOGS', link: '/blogs'},
        {id: 1, name: 'ABOUT', link: '/about'}
    ]
    return (
        <nav className='bg-indigo-100'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <FontAwesomeIcon icon={faCross}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
            </div>
            <ul  className={`md:flex md:text-lg md:font-bold md:py-6 justify-center absolute md:static bg-indigo-100 w-full duration-500 ease-in ${open ? 'top-6': 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link 
                        key={route.id} 
                        route={route}
                        ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;