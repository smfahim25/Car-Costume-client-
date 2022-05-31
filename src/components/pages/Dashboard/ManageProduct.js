import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageProductDelete from './ManageProductDelete';

const ManageProduct = () => {

    const [deletingPart, setDeletingPart] = useState(null)

    const { isLoading, data: parts, refetch } = useQuery('part', () =>
        fetch('https://car-parts-manufacturer.herokuapp.com/part').then(res =>
            res.json()
        )
    )



    if (isLoading) return <Loading></Loading>
    return (
        <div>
            <h1>ManageProduct{parts.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <ManageProductDelete
                                key={part._id}
                                part={part}
                                index={index}
                                setDeletingPart={setDeletingPart}
                            >
                            </ManageProductDelete>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingPart && <DeleteConfirmModal deletingPart={deletingPart} refetch={refetch} setDeletingPart={setDeletingPart}></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageProduct;