import React from 'react';


const Portfolio = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto mb-10">
                <div class="card-body">
                    <div class="avatar online mx-auto mb-5">
                        <div class="w-24 rounded-full">
                            <img src="https://mobcup.b-cdn.net/images/wt/1fdc7be050ffb03cac9276a47e1b03d3.jpg" />
                        </div>
                    </div>
                    <h2 class="card-title">S M Fahim Hossen</h2>
                    <h2 className="card-title">smfahimhossen@gmail.com</h2>
                    <p><span className='font-bold' > Location:</span>Dhaka,Bangladesh</p>
                    <p><span className='font-bold' > Education:</span> Bsc in CSE</p>
                    <p><span className='font-bold'>Expert:</span> HTML5, CSS3, Javascript,
                        ReactJs, Tailwind, DaisyUi
                        ,React Bootstrap.</p>
                    <p><span className='font-bold'>Familiar:</span> Context Api, C, Rest
                        Api, NodeJs, MongoDb,
                        ExpressJs. </p>
                    <p><span className='font-bold'>Tools:</span> Git, Github, VS Code,
                        Chrome Dev Tool, Firebase, Heroku,
                        Figma, Netlify, React Router</p>
                </div>
            </div>
            <h1 className='text-2xl font-bold text-green-500 text-center'>My Top 3 Projects</h1>
            <div className="card w-full bg-base-100 grid mt-5 sm:grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2 xl:grid-cols-4 shadow-xl lg:ml-40">
                <div className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://bike-house-22f6f.web.app/static/media/2.9609e192217eb5cad9cf.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <a href="https://bike-house-22f6f.web.app/" target="_blank"><button className="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <a href="https://ema-jhon-shopping-website.netlify.app/" target="_blank"><button className="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://independent-provider.web.app/static/media/slide1.21021f738330127f6364.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <a href="https://independent-provider.web.app/" target="_blank"><button className="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Portfolio;