import React from 'react';
import Rating from '../Rating/Rating';
import './SingleReview.css';

const SingleReview = (props) => {
    const { name, picture, review, rating } = props.review;
    // console.log(typeof rating);
    const numberRating = parseInt(rating);
    const arr = [];
    for (let i = 1; i <= numberRating; i++) {
        arr.push(i);

    }

    return (
        <div className='reviews-info border-2 border-cyan-700 mb-4 rounded-xl p-2 md:w-3/4 w-full'>
            <div>
                <div className='flex items-center'>
                    <img className='w-20 h-20 rounded-full' src={picture} alt="" />
                    <h1 className='text-xl ml-2'>Name:{name}</h1>
                </div>
                <div>
                    <p><span className='text-xl'>Comment: </span>{review}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <p>Rating: </p>
                {
                    arr.map(a => <Rating key={a}></Rating>)
                }
            </div>
        </div>
    );
};

export default SingleReview;