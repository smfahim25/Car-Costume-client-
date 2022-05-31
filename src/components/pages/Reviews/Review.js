import React from 'react';

const Review = (props) => {
    const { img, name, description, rating } = props.review;
    return (
        <div className="card w-80 bg-base-100 drop-shadow-lg">
            {img && < div className="avatar" >
                <div className="mt-2 mx-auto w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" >
                    <img src={img} alt="person" />
                </div >
            </div >}
            {
                !img && < div className="avatar" >
                    <div className="mt-2 mx-auto w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNqgtKxQluQTz14tp1uxGmIDxk98S2wGA3g&usqp=CAU" alt="person" />
                    </div >
                </div >
            }
            <div className="card-body" >
                <h2 className="card-title" >
                    {name}
                    < div className="badge badge-secondary" > Review</div >
                </h2 >
                <h3><span className='font-bold'> Rating:</span>  {rating}</h3>
                <div class="rating">
                    {!rating === rating}
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                </div>
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