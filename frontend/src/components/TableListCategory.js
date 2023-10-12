import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getAllCategory } from '../api/apiCategoryRequest';
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function TableListCategory({ currentListCategory }) {
    //lay state tu kho chua
    
    const dispatch = useDispatch();
    //lay all category
    useEffect(() => {
        // console.log('cl')
        getAllCategory(dispatch);
    }, [dispatch]);

    return (
        <table className="table table-hover rounded text-center">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name</th>
                    <th scope="col">IsActive</th>
                    <th scope="col">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {currentListCategory?.map((category, index) => (
                    <tr key={category.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{category.name}</td>
                        <td className='text-center'>{category.isActive ? <AiOutlineCheck /> : <AiOutlineClose />}</td>
                        <td>
                            <button className='btn btn-danger py-auto'><RiDeleteBin6Line /></button>
                            <button className='btn btn-primary my-auto'><RxUpdate /></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
