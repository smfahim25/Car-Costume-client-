import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const handleProfile = (e) => {
        e.preventDefault();
        const profile = {
            name: user?.displayName,
            email: user?.email,
            education: e.target.education.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            photo: e.target.photo.value,
            linkedin: e.target.linkedin.value,
        }
        fetch(`https://car-parts-manufacturer.herokuapp.com/myprofile/${user?.email}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)

        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted) {
                    alert('Profile added successfully');
                    window.location.reload();
                }
                else {
                    toast.error('Failed to add the profile');
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleProfile} className='mt-10 ml-16 lg:ml-80 '>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name='name'
                        defaultValue={user?.displayName}
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name='email'
                        placeholder="Your Email"
                        defaultValue={user?.email}
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input
                        type="text"
                        name='education'
                        placeholder="Education Details"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        type="positive number"
                        name='phone'
                        placeholder="Phone Number"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input
                        type="text"
                        name='address'
                        placeholder="Type your Address"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">LinkedIn Profile</span>
                    </label>
                    <input
                        type="text"
                        name='linkedin'
                        placeholder="Type your Link"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Photo</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Your photo link'
                        name='photo'
                        className="input input-bordered w-full max-w-xs mb-4"
                    />
                </div>
                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default MyProfile;