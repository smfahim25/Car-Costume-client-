import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import usePurchase from '../../../hooks/usePurchase';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { purchaseID } = useParams();
    const [loading, setLoading] = useState(false);
    const [tools, setTools] = usePurchase(purchaseID);
    const [quantity1, setQuantity] = useState(1);
    const { name, img, description, price, minorder, quantity } = tools;
    console.log(tools);
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
    return (
        <>
            {
                loading ? <Loading></Loading> :
                    <div>
                        <h1 class="text-4xl font-bold text-center underline">Purchase</h1>
                        <div class="hero mx-auto mt-10">
                            <div class="hero-content flex-col lg:flex-row">
                                <img src={img} className="lg:w-full rounded-lg shadow-xl mr-5" />
                                <div>
                                    <h1 class="text-2xl font-bold">{name}</h1>
                                    <p class="py-6">{description}</p>
                                    <h3><span className='font-bold'> Price:</span> ${price}</h3>
                                    <h3><span className='font-bold'> Min-Order:</span> {minorder}</h3>
                                    <h3><span className='font-bold'> Quantity:</span>  {quantity}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Purchase;