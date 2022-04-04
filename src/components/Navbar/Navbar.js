import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        {id: 1, name: 'HOME', link: '/home'},
        {id: 1, name: 'REVIEWS', link: '/reviews'},
        {id: 1, name: 'DASHBOARD', link: '/dashboard'},
        {id: 1, name: 'BLOGS', link: '/blogs'},
        {id: 1, name: 'ABOUT', link: '/about'}
    ]
    return (
        <nav>
            <ul className='md:flex justify-center'>
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