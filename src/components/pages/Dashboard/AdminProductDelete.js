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
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-xs">cancel</label>
                        <label onClick={handleDelete(id)} for="my-modal-6" class="btn btn-xs">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProductDelete;