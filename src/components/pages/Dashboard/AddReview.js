// import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
// import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user] = useAuthState(auth);
    // const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const { data: review, isLoading } = useQuery('review', () => fetch('https://secret-dusk-46242.herokuapp.com/review').then(res => res.json()))

    // const imageStorageKey='4295ac4d47b569312bea67b440cdbdbb';
    const onSubmit = event => {
        event.preventDefault();
        const review = {
            name: user?.displayName,
            rating: event.target.rating.value,
            img: event.target.img.value,
            description: event.target.description.value
            // specialty: data.specialty,
        }
        // send to your database 
        fetch('https://car-parts-manufacturer.herokuapp.com/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review added successfully');
                    window.location.reload();
                }
                else {
                    toast.error('Failed to add the review');
                }
            })




    }
    // window.location.reload()

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div className='mt-20'>
            <form onSubmit={onSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="number" name="rating" min='0' max='5' placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                <input type="text" name="img" placeholder="Image Link" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea textarea-primary w-80" name='description' placeholder="Description" ></textarea>
                <input type="submit" value="Add Review" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddReview;