import React from 'react';


const ManageProductRow = ({ index, manage }) => {

    const handleShipped = (id) => {

        fetch(`http://localhost:5000/manageorder/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload()
            })
    }
    //for delete
    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure you want to delete??')
        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
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
                <td>{manage.paid ? 'paid' : 'unpaid'}</td>
                <td>{manage.paid && <button onClick={() => handleShipped(manage._id)} className='btn btn-xs'>Pending</button>}</td>
                <td>{manage.shipped ? 'shipped' : ''}</td>
                <td>{!manage.paid && <button onClick={() => handleDelete(manage._id)} className='btn btn-xs'>delete</button>}</td>

            </tr>

        </>
    );
};

export default ManageProductRow;