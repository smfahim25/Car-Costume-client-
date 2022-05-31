import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3gQGHvhC1fubExT7AaWZtH9nTFXFLcKwpkgj5YTGEuJtiDAqmA2GgbO9d5v6WtYwIj54dWtmv3ocVNDhUtQmm400QbxjrAXn');

const Payment = () => {
    const { id } = useParams()
    const url = `https://car-parts-manufacturer.herokuapp.com/myorder/${id}`
    const { data: order, isLoading } = useQuery(['myorder', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    let price = order?.pricePerUnit * order?.orderQuantity
    if (isLoading) return <Loading></Loading>
    return (
        <div>

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <div className="card-body">
                        <p className='text-left'>Hello,<span className='text-green-500 font-bold'>{order.customerName}</span></p>
                        <h2 className="card-title">Please Pay for {order.product}</h2>
                        <p className='text-left'>Please pay for: ${price}</p>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} price={price} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;