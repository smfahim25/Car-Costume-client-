import React, { useState } from 'react';
import { data } from 'autoprefixer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import usePurchase from '../../../hooks/usePurchase';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { purchaseID } = useParams();
    const [part] = usePurchase(purchaseID);
    const [disabled, setDisabled] = useState(false)
    const { name, img, description, price, minorder, quantity } = part;
    const [user, loading] = useAuthState(auth);
    const { register, watch, formState: { errors }, handleSubmit } = useForm();
    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        const order = {
            productId: part._id,
            product: part.name,
            customerName: user?.displayName,
            customerEmail: user?.email,
            adress: data.adress,
            phone: data.phone,
            price: part.price,
            orderQuantity: data.productquantity
        }
        fetch('https://car-parts-manufacturer.herokuapp.com/part', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(result => {
                //console.log(result);
                toast.success('succesfully booked the product')

            })
    };

    return (
        <>
            {
                loading ? <Loading></Loading> :
                    <div>
                        <h1 className="text-4xl font-bold text-center underline mt-10">Purchase</h1>
                        <div className="hero mx-auto mt-10">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={img} className="lg:w-full rounded-lg shadow-xl" />
                                <div>
                                    <h1 className="text-2xl font-bold">{name}</h1>
                                    <p className="py-6">{description}</p>
                                    <h3><span className='font-bold'> Price:</span> ${price}</h3>
                                    <h3><span className='font-bold'> Min-Order:</span> {minorder}</h3>
                                    <h3><span className='font-bold'> Quantity:</span>  {quantity}</h3>
                                    <form onSubmit={handleSubmit(onSubmit)} className=' flex justify-center'>

                                        <div>
                                            <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                    <span class="label-text">Name</span>
                                                </label>
                                                <input value={user?.displayName} {...register("name", { required: true })} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                    <span class="label-text">Email</span>
                                                </label>
                                                <input value={user?.email} {...register("email", { required: true })} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                    <span class="label-text">Adress</span>
                                                </label>
                                                <input
                                                    {...register("adress", {
                                                        required: {
                                                            value: true,
                                                            message: 'adress is Required'
                                                        },

                                                    })}
                                                    type="text" placeholder="" class="input input-bordered w-full max-w-xs" />
                                                <label className="label">
                                                    {errors.adress?.type === 'required' && <span className="text-red-500">{errors.adress.message}</span>}
                                                </label>
                                            </div>
                                            <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                    <span class="label-text">Phone</span>
                                                </label>
                                                <input
                                                    {...register("phone", {
                                                        required: {
                                                            value: true,
                                                            message: 'phone number is Required'
                                                        },

                                                    })}
                                                    type="text" placeholder="" class="input input-bordered w-full max-w-xs" />
                                                <label className="label">
                                                    {errors.phone?.type === 'required' && <span className="text-red-500">{errors.phone.message}</span>}
                                                </label>
                                            </div>
                                            <div class="form-control w-full max-w-xs">
                                                <label class="label">
                                                    <span class="label-text">Product Quantity</span>
                                                </label>
                                                <input
                                                    {...register("productquantity", {
                                                        required: {
                                                            value: true,
                                                            message: 'quantity is Required'
                                                        },

                                                        min: {
                                                            value: part.minOrder,
                                                            message: `you have to order atleast ${part.minorder}` // JS only: <p>error message</p> TS only support string
                                                        },
                                                        max: {
                                                            value: part.quantity,
                                                            message: `you cant order more than ${part.quantity}` // JS only: <p>error message</p> TS only support string
                                                        }
                                                    })}
                                                    type="positivenumber" defaultValue={part.minorder} class="input input-bordered w-full max-w-xs" />
                                                <label className="label">
                                                    {errors.productquantity?.type === 'required' && <span className="text-red-500">{errors.productquantity.message}</span>}
                                                    {errors.productquantity?.type === 'max' && <span className="text-red-500">{errors.productquantity.message}</span>}
                                                    {errors.productquantity?.type === 'min' && <span className="text-red-500">{errors.productquantity.message}</span>}
                                                </label>
                                            </div>
                                            {errors.productquantity?.type === 'min' || errors.productquantity?.type === 'max' ? <input onClick={setDisabled(true)} disabled={disabled} type="submit" className='btn btn-active mt-3' value='purchase' /> : <input type="submit" className='btn btn-active mt-3' value='purchase' />}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Purchase;