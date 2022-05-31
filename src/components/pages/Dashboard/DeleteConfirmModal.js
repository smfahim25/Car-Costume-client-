import React from 'react';

const DeleteConfirmModal = ({ deletingPart, refetch, setDeletingPart }) => {
    const { name, _id } = deletingPart
    const handleDelete = (id) => {
        fetch(`https://car-parts-manufacturer.herokuapp.com/part/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                setDeletingPart(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete: {name}</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm">Delete</button>
                        <label htmlFor="delete-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;