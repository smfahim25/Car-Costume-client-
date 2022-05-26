import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import usePurchase from '../../../hooks/usePurchase';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { purchaseID } = useParams();
    const [loading, setLoading] = useState(false);
    const [tools, setTools] = usePurchase(purchaseID);
    const [quantity1, setQuantity] = useState(1);
    const { name, img, description, price, minorder, quantity } = tools;
    const [user, loading1, error] = useAuthState(auth);

    const handleChange = event => {
        event.preventDefault();
        const productQuantity = event.target.quantity.value;
        const phone = event.target.phone.value;
        console.log(productQuantity, phone)

    }

    return (
        <>
            {
                loading || loading1 ? <Loading></Loading> :
                    <div>
                        <h1 className="text-4xl font-bold text-center underline mt-10">Purchase</h1>
                        <div className="hero mx-auto mt-10">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={img} className="lg:w-full rounded-lg shadow-xl mr-5" />
                                <div>
                                    <h1 className="text-2xl font-bold">{name}</h1>
                                    <p className="py-6">{description}</p>
                                    <h3><span className='font-bold'> Price:</span> ${price}</h3>
                                    <h3><span className='font-bold'> Min-Order:</span> {minorder}</h3>
                                    <h3><span className='font-bold'> Quantity:</span>  {quantity}</h3>
                                    <form onSubmit={handleChange} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="quantity" defaultValue={minorder} className="input input-bordered w-full max-w-xs" />
                                        <input type="submit" value="Purchase" className="btn btn-secondary w-full max-w-xs" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Purchase;