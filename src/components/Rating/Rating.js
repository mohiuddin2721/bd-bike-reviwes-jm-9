import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Rating = () => {
    return (
        <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>
    );
};

export default Rating;