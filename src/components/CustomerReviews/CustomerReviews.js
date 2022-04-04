import React from 'react';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const CustomerReviews = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews);
    return (
        <div>
            <h1 className='text-5xl font-semibold'>Customer Reviews(3)</h1>
            <div className='single-review'>
                {
                    reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                }
            </div>
            <button className='border-solid border-0 rounded py-2 m-4 px-4 bg-cyan-200'>See more reviews....</button>

        </div>
    );
};

export default CustomerReviews;