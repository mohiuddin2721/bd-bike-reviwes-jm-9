import React from 'react';
import './SingleReview.css';

const SingleReview = (props) => {
    const { name, picture, review } = props.review;
    // console.log(props.review);
    return (
        <div className='reviews-info'>
            <img src={picture} alt="" />
            <div>
                <h1>Name:{name}</h1>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default SingleReview;