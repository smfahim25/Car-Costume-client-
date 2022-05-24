import React from 'react';

const Review = (props) => {
    const { img, name, description } = props.review;
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
                    < div className="badge badge-secondary" > NEW</div >
                </h2 >
                <p>{description.slice(0, 200)}</p>
                <div className="card-actions justify-end" >
                    <div className="badge badge-outline" > Tool</div >
                    <div className="badge badge-outline" > Manufacturer</div >
                </div >
            </div >
        </div >
    );
};

export default Review;