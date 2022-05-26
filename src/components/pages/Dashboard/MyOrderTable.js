
import { Link } from 'react-router-dom';
import OrderDeleteModal from './OrderDeleteModal';


const MyOrderTable = ({ order, setOrderModal, orderModal }) => {
    const { _id } = order
    return (
        <>
            <tr>
                <th>{order.product}</th>
                <td>{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td>{order.orderQuantity}</td>
                <td>{(order.pricePerUnit && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}</td>
                <td>{(order.pricePerUnit && order.paid) && <span className='text-success'>paid</span>}</td>
                <td>{order.transictionId}</td>
                {
                    // !order.paid && <td><button onClick={() => handleOrderDel(order._id)} className='btn btn-xs'>Delete</button></td>
                    !order.paid && <td><label onClick={setOrderModal} for="order-delete-modal" class="btn btn-xs">Delete</label></td>
                }

                {/* <button class="btn btn-xs">delete</button> */}
            </tr>
            {orderModal && <OrderDeleteModal _id={_id}></OrderDeleteModal>}
        </>


    );
};

export default MyOrderTable;