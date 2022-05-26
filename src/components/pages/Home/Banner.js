import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${'https://cdn.shopify.com/s/files/1/0266/4166/2049/files/2_2a0778f9-da06-4926-9781-ec1b697430ae.png?v=1612511678'})`
        }}>
            <div className="hero-overlay" ></div >
            <div className="hero-content text-center text-neutral-content" >
                <div className="max-w-md" >
                    <h1 className="mb-5 text-5xl font-bold" > Cars Costume</h1 >
                    <p className="mb-5" > Here you will get best product and lowest rate. You can trust us.</p >
                    <button className="btn btn-primary" > Get Started</button >
                </div >
            </div >
        </div >
    );
};

export default Banner;