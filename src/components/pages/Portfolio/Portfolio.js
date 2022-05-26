import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">S M Fahim Hossen</h2>
                <h2 class="card-title">smfahimhossen@gmail.com</h2>
                <p>Dhaka,Bangladesh</p>
                <p>Bsc in CSE</p>
                <h1>
                    <li>Frontend:HTML5, CSS3, Javascript,
                        ReactJs, Bootstrap, Tailwind, DaisyUi
                        , React Bootstrap.</li>
                    <li>Backend:NodeJs, MongoDb,
                        ExpressJs.</li>
                    <li>Familiar:Context Api, java, C, Rest
                        Api, React Hook Forms</li>
                    <li>Tools:Git, Github, VS Code,
                        Chrome Dev Tool, Firebase, Heroku,
                        Figma, Netlify, React Router</li>
                </h1>
            </div>
            <h1 className='text-2xl font-bold text-green-500 text-center'>My Top 3 Projects</h1>
            <div class="card w-full bg-base-100 grid mt-5 sm:grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2 xl:grid-cols-4 shadow-xl ml-40">
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://bike-house-22f6f.web.app/static/media/2.9609e192217eb5cad9cf.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://bike-house-22f6f.web.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://ema-jhon-shopping-website.netlify.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://independent-provider.web.app/static/media/slide1.21021f738330127f6364.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://independent-provider.web.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Portfolio;