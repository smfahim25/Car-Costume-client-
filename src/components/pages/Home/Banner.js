import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            background: `url(${'https://cdn.shopify.com/s/files/1/0266/4166/2049/files/2_2a0778f9-da06-4926-9781-ec1b697430ae.png?v=1612511678'})`
        }}>
            <div class="hero-overlay"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Tools Mantufacturer</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;