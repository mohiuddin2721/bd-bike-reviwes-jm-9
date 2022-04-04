import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews);
    return (
        <div>
            <h1 className='text-3xl mt-10 text-blue-500 font-semibold'>All Reviews of customer</h1>
            <div className='single-review md:ml-60 mt-12'>
                {
                    reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                }
            </div>
            <Link to="/home">
                <button className='border-solid border-0 rounded py-2 m-4 px-4 bg-cyan-200'>Back to home</button>
            </Link>
        </div>
    );
};

export default Reviews;