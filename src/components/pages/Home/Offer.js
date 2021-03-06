import React from 'react';
import Count from './Countdown/count';

const Offer = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-10 underline'>Deal Of the Day</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://cdn.shopify.com/s/files/1/0266/4166/2049/products/14_f3517be8-6724-43e2-8805-bf4c0474a46e.png?v=1571309660" className="max-w-sm rounded-lg shadow-xl w-64" />
                    <div>
                        <h1 className="text-5xl font-bold">Our best deal comming soon</h1>
                        <p className="py-6">Our offer coming wait for it. It will be best offer for our customers. We always try to satisfied our customers. On that day you will gate the best product and high discount. This deal is best for wholesealer.</p>
                        <h2 className='text-2xl font-bold text-center'>Remaining Time</h2>
                        <div className="margin">
                            <Count></Count>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Offer;