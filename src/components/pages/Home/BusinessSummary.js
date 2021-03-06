import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='mb-16 App'>
            <h1 className='text-center text-4xl font-bold mt-10 mb-5 underline'>Business Summary</h1>
            <div className='text-white' style={{
                backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0266/4166/2049/files/1_e9c8f067-381c-4d1e-9a61-feef1bf277c8.png?v=1612511663'})`
            }}>
                <h3 className='text-5xl mb-10 mt-10 leading-relaxed'>Millions of people believes us. We try to satisfy our Customers. We always try to respectful behaviors of our customers.</h3>
                <div className="sm:stats-vertical lg:flex text-white backdrop-blur-sm">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                        </div>
                        <div className="text-white">Our Customers</div>
                        <div className="stat-value" > 31  M</div >
                        <div className="text-white font-semibold" > Jan 1st 2001 - Feb 1st 2022</div >
                    </div >

                    <div className="stat" >
                        <div className="stat-figure text-secondary" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                        </div >
                        <div className="text-white" > New Customers</div >
                        <div className="stat-value" > 12, 200</div >
                        <div className="text-white font-semibold" > Feb 1st 2022</div >
                    </div >

                    <div className="stat" >
                        <div className="stat-figure text-secondary" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                            </svg>
                        </div >
                        <div className="text-white" > Countries</div >
                        <div className="stat-value" > 120</div >
                        <div className="text-white font-semibold" > Our client</div >
                    </div >
                    <div className="stat" >
                        <div className="stat-figure text-secondary" >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg >
                        </div >
                        <div className="text-white" > Annual Revenue</div >
                        <div className="stat-value" > 50M</div >
                        <div className="text-white font-semibold" >?????? 80(22 %)</div >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default BusinessSummary;