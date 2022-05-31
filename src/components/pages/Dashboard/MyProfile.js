import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
// import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const handleProfile = (e) => {
        e.preventDefault()
        const profile = {
            name: user?.displayName,
            email: user?.email,
            education: e.target.education.value,
            location: e.target.location.value,
            phone: e.target.number.value,
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
            .then(data => {
                console.log(data);
                toast.success('Information added successfully.')
                e.target.reset();
            })
    }
    return (
        <div>
            <h1 className='text-center text-xl font-bold mt-5'>MyProfile</h1>
            <form className='lg:ml-96 ml-5' onSubmit={handleProfile}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input defaultValue={user?.displayName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input defaultValue={user?.email} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Education</span>

                    </label>
                    <input name='education' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>

                    </label>
                    <input name='location' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">PhoneNumber</span>

                    </label>
                    <input name='number' type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Linkedin Link</span>

                    </label>
                    <input name='linkedin' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input className='btn w-full max-w-xs mt-4' type="submit" value='submit' />
                </div>

            </form>
        </div>
    );
};

export default MyProfile;