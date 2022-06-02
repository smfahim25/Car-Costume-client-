import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://car-parts-manufacturer.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-10 mb-5 underline'>Products</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-12 ml-6' >
                {
                    tools.slice(1).slice(-6).map(tool => <Tool key={tool._id} tool={tool}></Tool>).reverse()
                }
            </div>
        </div>
    );
};

export default Tools;