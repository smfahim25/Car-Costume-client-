import React, { useEffect, useState } from 'react';
import Review from '../Reviews/Review';

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='mb-16 mt-16'>
            <h1 className='text-center text-4xl font-bold mt-10 mb-10 underline'>Reviews</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12'>
                {
                    reviews.slice(0, 6).map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default HomeReview;