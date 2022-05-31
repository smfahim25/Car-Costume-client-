import React from 'react';

const AdminProductDelete = ({ id }) => {
    const handleDelete = (id) => {
        fetch(`https://car-parts-manufacturer.herokuapp.com/order/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload()
            })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-xs">cancel</label>
                        <label onClick={handleDelete(id)} for="my-modal-6" className="btn btn-xs">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProductDelete;