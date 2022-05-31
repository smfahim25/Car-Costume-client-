import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = (props) => {
    // console.log(props.tool);
    const { _id, img, name, description, price, quantity, minorder } = props.tool;
    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card w-80 bg-base-100 drop-shadow-lg">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 250)}</p>
                <h3><span className='font-bold'> Price:</span> ${price}</h3>
                <h3><span className='font-bold'> Min-Order:</span> {minorder}</h3>
                <h3><span className='font-bold'> Quantity:</span>  {quantity}</h3>
                <div className="card-actions justify-end">
                    <button onClick={() => navigateToUpdate(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;