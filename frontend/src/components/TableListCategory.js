import { useDispatch, useSelector } from 'react-redux';
import { getCategoryUpdate } from '../api/apiCategoryRequest';
import { RxUpdate } from "react-icons/rx";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Button from './Button';
import { useMemo, useState } from 'react';
import Pagination from './Pagination';

let PageSize = 6;

export default function TableListCategory({ axiosRefeshToken }) {
    //lay state tu kho chua
    let accessToken = useSelector(state => state.auth.login.currentUser?.accessToken)
    //lay all category
    let categoryList = useSelector(state => state.category.listCategory)
    const dispatch = useDispatch();


    const [currentPage, setCurrentPage] = useState(1);

    const currentListCategory = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return categoryList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, categoryList]);


    const handleUpdateCategory = (id) => {
        console.log(id)
        getCategoryUpdate(dispatch, accessToken, id, axiosRefeshToken)
    }

    return (
        <>
            <table className="table table-hover rounded text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">IsActive</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentListCategory?.map((category) => (
                        <tr key={category.id}>
                            <th scope="row">{category.id}</th>
                            <td>{category.name}</td>
                            <td className='text-center'>{category.isActive ? <AiOutlineCheck color='green' /> : <AiOutlineClose color='red' />}</td>
                            <td>
                                <Button handleClick={() => handleUpdateCategory(category.id)} className='btn btn-primary my-auto'><RxUpdate /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={categoryList.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}
