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
    // const preQuantity = quantity;
    // const quantityRef = useRef('');
    // const handleUpdateCars = event => {
    //     event.preventDefault();
    //     const quantity = parseInt(quantityRef.current.value) + parseInt(preQuantity);
    //     // for fron end show 
    //     bikes.quantity = parseInt(quantityRef.current.value) + parseInt(bikes.quantity);
    //     const updatedBikes = { quantity };

    //     // send data to the server
    //     setLoading(true);
    const placeholder = `Minimum Quantity ${quantity}`;
    const [disabled, setDisabled] = useState(false);
    const handleChange = event => {
        event.preventDefault();
        const productQuantity = event.target.quantity.value;
        const phone = event.target.phone.value;
        if (productQuantity < 15) {
            toast.error('You have to purchase Minimum quantity 15');
            setDisabled(true);
        }
        else if (productQuantity > quantity) {
            toast.error('You have to order in stock quantity');
            setDisabled(true);
        }
        else {
            console.log(productQuantity, phone);
        }
    }

    return (
        <>
            {
                loading ? <Loading></Loading> :
                    <div>
                        <h1 className="text-4xl font-bold text-center underline">Purchase</h1>
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
                                        {/* <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" /> */}
                                        {/* <select name="slot" className="select select-bordered w-full max-w-xs">
                                            {
                                                slots.map((slot, index) => <option
                                                    key={index}
                                                    value={slot}
                                                >{slot}</option>)
                                            }
                                        </select> */}
                                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                        <input type="text" name="productQuantity" defaultValue={quantity} placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
                                        <input type="submit" disabled={disabled} value="Purchase" className="btn btn-secondary w-full max-w-xs" />
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