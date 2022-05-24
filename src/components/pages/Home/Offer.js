import React from 'react';
import Count from './Countdown/count';

const Offer = () => {
    return (
        <div className='m-0'>
            <h1 className='text-center text-4xl font-bold mt-10 mb-5 underline'>Deal Of the Day</h1>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://cdn.shopify.com/s/files/1/0266/4166/2049/products/14_f3517be8-6724-43e2-8805-bf4c0474a46e.png?v=1571309660" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Our best deal comming soon</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <h2 className='text-2xl font-bold text-center'>Remaining Time</h2>
                        <div className=" margin">
                            <Count></Count>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;