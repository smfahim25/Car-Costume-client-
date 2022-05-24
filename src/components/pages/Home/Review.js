import React from 'react';

const Review = (props) => {
    const { img, name, description } = props.review;
    return (
        <div class="card w-96 bg-base-100 drop-shadow-lg">
            <div class="avatar">
                <div class="mt-2 mx-auto w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt="person" />
                </div>
            </div>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{description.slice(0, 200)}</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Tool</div>
                    <div class="badge badge-outline">Manufacturer</div>
                </div>
            </div>
        </div>
    );
};

export default Review;