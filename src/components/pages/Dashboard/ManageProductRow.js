import React from 'react';


const ManageProductRow = ({ index, manage, refetch }) => {
    const handleShipped = (id) => {

        fetch(`https://car-parts-manufacturer.herokuapp.com/manageorder/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
                window.location.reload()
            })
    }
    //for delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete??')
        if (proceed) {
            fetch(`https://car-parts-manufacturer.herokuapp.com/order/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    console.log(data);
                    window.location.reload()
                })

        }

    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{manage.customerEmail}</td>
                <td>{manage.product}</td>
                <td>{manage.paid ? 'Paid' : 'Unpaid'}</td>
                <td> {manage.paid && !manage.shipped ? <button onClick={() => handleShipped(manage._id)} className='btn btn-xs'>Pending</button> : manage.shipped && 'shipped'}</td>
                {/* <td>{manage.paid && <button onClick={() => handleShipped(manage._id)} className='btn btn-xs'>Pending</button>}</td> */}
                {/* <td>{manage.shipped ? 'Shipped' : ''}</td> */}
                <td>{!manage.paid && <button onClick={() => handleDelete(manage._id)} className='btn btn-xs'>delete</button>}</td>

            </tr>

        </>
    );
};

export default ManageProductRow;