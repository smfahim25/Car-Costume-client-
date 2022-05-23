import React from 'react';

const Contact = () => {
    return (
        <div style={{
            background: `url(${'https://cdn.shopify.com/s/files/1/0266/4166/2049/files/1_e9c8f067-381c-4d1e-9a61-feef1bf277c8.png?v=1612511663'})`
        }}>
            <div className=' px-10 py-14 hero-overlay bg-opacity-60'>
                <div className='text-center pb-14 text-white'>
                    <p className='text-4xl leading-3 text-center pb-14 text-white'>
                        Contact Us
                    </p>
                    <h1 className='text-4xl'>Stay connected with us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <button className='btn hover:bg-black'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;