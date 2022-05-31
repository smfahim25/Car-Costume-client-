import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-96" style={{
            background: `url(${'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'})`
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