import React from 'react';
import { Link } from 'react-router-dom';

const Tool = (props) => {
    // console.log(props.tool);
    const { img, name, description, price, quantity } = props.tool;
    return (
        <div className="card w-96 bg-base-100 drop-shadow-lg">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 250)}</p>
                <h3><span className='font-bold'> Price:</span> {price}</h3>
                <h3><span className='font-bold'> Quantity:</span>  {quantity}</h3>
                <div className="card-actions justify-end">
                    <Link to='/purchase' className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;