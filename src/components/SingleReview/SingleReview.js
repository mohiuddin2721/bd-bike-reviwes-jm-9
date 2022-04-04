import React from 'react';
import './SingleReview.css';

const SingleReview = (props) => {
    const { name, picture, review, id } = props.review;
    // console.log(props.review);
    return (
        <div className='reviews-info md:w-3/4 w-full'>
            <img src={picture} alt="" />
            <div>
                <h1 className='text-xl'>Name:{name}</h1>
                <p><span className='text-xl'>Comment: </span>{review}</p>
            </div>
        </div>
    );
};

export default SingleReview;