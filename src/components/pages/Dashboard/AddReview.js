import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
// import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleReview = e => {
        e.preventDefault()
        const review = {
            name: user?.displayName,
            rating: e.target.ratings.value,
            img: e.target.image.value,
            description: e.target.review.value
        }
        fetch('https://car-parts-manufacturer.herokuapp.com/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast.success('Review added successfully.')
                e.target.reset();
            })
    }
    return (
        <div>
            <h1 className='text-xl text-center font-bold mt-5 mb-3'>Please Add you Valuable FeedBack</h1>
            <form onSubmit={handleReview} className='flex justify-center'>
                <div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Ratings:</span>
                        </label>
                        <input name='ratings' min='0' max='5' type="number" placeholder="Type your ratings" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image Link:</span>
                        </label>
                        <input name='image' type="text" placeholder="Put Your link" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description:</span>
                        </label>
                        <textarea name='review' type="text" placeholder="Enter Your FeedBack" className="textarea textarea-primary" />
                    </div>
                    <input value='add' type="submit" placeholder="Enter Your FeedBack" className="btn w-full max-w-xs my-2" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;