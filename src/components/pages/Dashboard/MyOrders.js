import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
// import auth from '../../firebase.init';
import MyOrderTable from './MyOrderTable';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [orderModal, setOrderModal] = useState(null)
    const [myorder, setMyOrder] = useState([])


    //console.log(myorder);
    useEffect(() => {

        if (user) {
            fetch(`https://car-parts-manufacturer.herokuapp.com/myorder?customerEmail=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => {
                    // console.log(data);
                    setMyOrder(data)
                })
        }
    }, [user, navigate])

    return (
        <div>
            <h1>{user?.displayName} Has:{myorder.length} Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>CustomerEmail</th>
                            <th>OrderQuantity</th>
                            <th>payment</th>
                            <th>Paid</th>
                            <th>TransictionId</th>
                            <th></th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            myorder.map(order => <MyOrderTable key={order._id}
                                order={order}
                                setOrderModal={setOrderModal}
                                orderModal={orderModal}
                            >
                            </MyOrderTable>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyOrders;