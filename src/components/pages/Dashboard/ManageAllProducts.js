import React, { useEffect, useState } from 'react';
import ManageProductRow from './ManageProductRow';

const ManageAllProducts = () => {
    const [manageOrder, setManageOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/manageorder')
            .then(res => res.json())
            .then(data => setManageOrder(data))
    }, [])
    return (
        <div>
            <h1>ManageAllOrders: {manageOrder.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageOrder.map((manage, index) => <ManageProductRow key={manage._id}
                            manage={manage}
                            index={index}
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