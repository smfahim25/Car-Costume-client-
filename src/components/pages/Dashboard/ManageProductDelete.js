import React from 'react';

const ManageProductDelete = ({ part, index, setDeletingPart }) => {


    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{part.name}</td>
                <td>
                    <label onClick={() => setDeletingPart(part)} for="delete-modal" class="btn btn-error btn-sm ">Delete</label>

                </td>
            </tr>
        </>
    );
};

export default ManageProductDelete;