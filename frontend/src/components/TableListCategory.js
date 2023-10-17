import { useDispatch, useSelector } from 'react-redux';
import { getCategoryUpdate } from '../api/apiCategoryRequest';
import { RxUpdate } from "react-icons/rx";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function TableListCategory({ currentListCategory, axiosRefeshToken }) {
    //lay state tu kho chua
    let accessToken = useSelector(state => state.auth.login.currentUser?.accessToken)
    const dispatch = useDispatch();
    //lay all category
    

    const handleUpdateCategory = (id) => {
        getCategoryUpdate(dispatch, accessToken, id, axiosRefeshToken)
    }

    return (
        <table className="table table-hover rounded text-center">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name</th>
                    <th scope="col">IsActive</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {currentListCategory?.map((category, index) => (
                    <tr key={category.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{category.name}</td>
                        <td className='text-center'>{category.isActive ? <AiOutlineCheck color='green' /> : <AiOutlineClose color='red' />}</td>
                        <td>
                            <button onClick={() => handleUpdateCategory(category.id)} className='btn btn-primary my-auto'><RxUpdate /></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
