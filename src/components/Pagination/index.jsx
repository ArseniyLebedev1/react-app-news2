import styles from "../Pagination/Pagination.styles.module.css";

const Pagination = ({
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  totalPages,
  currentPage,
}) => {
  return (
    <div className={styles.paginationWrapper}>
      <button
        className={styles.arrow}
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            className={styles.pageNumber}
            onClick={() => handlePageClick(index + 1)}
            disabled={index + 1 === currentPage}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export { Pagination };
