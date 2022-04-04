import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const CustomerReviews = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews);
    return (
        <div>
            <h1 className='text-5xl font-semibold'>Customer Reviews(3)</h1>
            <div className='single-review md:ml-60 mt-12'>
                {
                    reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                }
            </div>
            <Link to="/reviews">
                <button className='border-solid border-0 rounded py-2 m-4 px-4 bg-cyan-200'>See more reviews....</button>
            </Link>
        </div>
    );
};

export default CustomerReviews;