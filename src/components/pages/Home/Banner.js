import React from 'react';

const Banner = () => {
    return (
        <div class="hero max-h-screen mt-8">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://cdn.shopify.com/s/files/1/0266/4166/2049/files/2_2a0778f9-da06-4926-9781-ec1b697430ae.png?v=1612511678" class="max-w-3xl rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;