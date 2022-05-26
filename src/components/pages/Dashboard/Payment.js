import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0hc6DdE5bh3gXfgz3zoZxYxVGOMUTYwQRaoErBkVHRhp4QPU12pUXbc14Y3EEmSONx9J0uog63dVXmfVyyd8L7004J8NduaQ');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/myorder/${id}`
    const { data: order, isLoading } = useQuery(['myorder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    let price = order?.pricePerUnit * order?.orderQuantity
    if (isLoading) return 'Loading...'
    return (
        <div>

            <div>
                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <p className='text-left'>Hello,<span className='text-green-500 font-bold'>{order.customerName}</span></p>
                        <h2 class="card-title">Please Pay for {order.product}</h2>
                        <p className='text-left'>Please pay for: ${price}</p>
                    </div>
                </div>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} price={price} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;