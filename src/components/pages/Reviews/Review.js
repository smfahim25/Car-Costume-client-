import React from 'react';

const Review = (props) => {
    const { img, name, description, rating } = props.review;
    return (
        <div className="card w-96 bg-base-100 drop-shadow-lg">
            < div className="avatar" >
                <div className="mt-2 mx-auto w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" >
                    <img src={img} alt="person" />
                </div >
            </div >
            <div className="card-body" >
                <h2 className="card-title" >
                    {name}
                    < div className="badge badge-secondary" > Review</div >
                </h2 >
                <h3><span className='font-bold'> Rating:</span>  {rating}</h3>
                <p>{description.slice(0, 200)}</p>
                <div className="card-actions justify-end" >
                    <div className="badge badge-outline" > Cars</div >
                    <div className="badge badge-outline" > Cars parts</div >
                </div >
            </div >
        </div >
    );
};

export default Review;