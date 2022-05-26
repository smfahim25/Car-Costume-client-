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
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete: {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-sm">Delete</button>
                        <label for="delete-modal" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;