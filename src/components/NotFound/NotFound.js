import React from 'react';
import { Link } from 'react-router-dom';
import errorPic from '../../Images/errorPic1.jpg';

const NotFound = () => {
    return (
        <div className='md:mt-8 mt-6'>
            <h2>The requested URL [URL] was not found on this server</h2>
            <h4>Error 404 Not Found</h4>
            <div>
                <Link to="/home">
                    <img className='w-1/2 h-1/2 ml-28 md:ml-96 rounded mt-6' src={errorPic} alt="error pic" />
                </Link>
            </div>
        </div>
    );
};

export default NotFound;