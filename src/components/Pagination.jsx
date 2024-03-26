import React from "react";

const Pagination = ({ movies, postPerPage, setCurrentPage, currentPage }) => {
    const pages = []

    for (let i = 1; i <= Math.ceil(movies / postPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className="pagination">
            {
                pages.map((page, index) =>
                (<button key={index} className={page === currentPage ? "btn btn_active" : "btn"}
                    onClick={() => setCurrentPage(page)}>
                    {page}
                </button>))
            }
        </div>
    )
}


export default Pagination;