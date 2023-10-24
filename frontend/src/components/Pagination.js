
import { usePagination, DOTS } from '../HOOK/usePagination';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import DivColor from './DivColor';
// import './pagination.scss';
const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <nav aria-label="Page navigation example" >
            <ul
                className='pagination justify-content-center'
            >
                {/* Left navigation arrow */}
                <li
                    className={currentPage === 1 ? 'page-item disabled' : 'page-item'}
                    onClick={onPrevious}
                >
                    <DivColor className='page-link'>
                        <MdNavigateBefore />
                    </DivColor>
                </li>
                {paginationRange.map(pageNumber => {

                    // If the pageItem is a DOT, render the DOTS unicode character
                    if (pageNumber === DOTS) {
                        return <li key={pageNumber} className="pagination-item dots">
                            <DivColor className='page-link'>&#8230;</DivColor>
                        </li>;
                    }

                    // Render our Page Pills
                    return (
                        <li key={pageNumber}
                            className={pageNumber === currentPage ? "page-item active" : "page-item"}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            <DivColor className='page-link'>{pageNumber}</DivColor>
                        </li>
                    );
                })}
                {/*  Right Navigation arrow */}
                <li
                    className={currentPage === lastPage ? 'page-item disabled' : 'page-item'}
                    onClick={onNext}
                >
                    <DivColor className='page-link'><MdNavigateNext /></DivColor>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;