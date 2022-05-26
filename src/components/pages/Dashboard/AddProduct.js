import React from 'react';

const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const product = {
            name: e.target.productname.value,
            img: e.target.productimg.value,
            description: e.target.description.value,
            minorder: e.target.MinimumOrder.value,
            quantity: e.target.AvailableQuantity.value,
            price: e.target.PricePerUnit.value,
        }

        fetch('https://car-parts-manufacturer.herokuapp.com/adminpost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1>AddProduct</h1>
            <form onSubmit={handleSubmit} className='flex justify-center'>
                <div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input name='productname' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Image</span>
                        </label>
                        <input name='productimg' type="input" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <input name='description' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Minimum Order</span>
                        </label>
                        <input name='MinimumOrder' type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Available Quantity</span>
                        </label>
                        <input name='AvailableQuantity' type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Price Per Unit</span>
                        </label>
                        <input name='PricePerUnit' type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input className='btn mt-4' type="submit" value='Add' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;