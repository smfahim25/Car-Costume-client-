import React from 'react';
import img from '../../../assets/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img src={img} className="w-1/3 mx-auto mt-16" alt='404' />
        </div>
    );
};

export default NotFound;