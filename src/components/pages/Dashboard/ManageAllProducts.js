// import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductRow from './ManageProductRow';

const ManageAllProducts = () => {
    const { data: manageorder, isLoading, refetch } = useQuery('manageorder', () =>
        fetch('https://car-parts-manufacturer.herokuapp.com/manageorder', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) return <Loading></Loading>
    return (
        <div>
            <h1>Manage all orders: {manageorder.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageorder.map((manage, index) => <ManageProductRow key={manage._id}
                            manage={manage}
                            index={index}
                            refetch={refetch}
                        >
                        </ManageProductRow>)

                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProducts;