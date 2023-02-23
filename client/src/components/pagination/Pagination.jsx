const Pagination = ({ ...props }) => {
  /* PAGINATION */
  return props.pages
    .filter(
      (pageNumber) =>
        pageNumber <= props.maxPageLimit && pageNumber > props.minPageLimit
    )
    .map((pageNumber) => {
      return (
        <div
          key={pageNumber}
          className={
            props.currentPage === pageNumber
              ? "page-button select"
              : "page-button"
          }
          data-page={pageNumber}
          onClick={(e) => {
            props.setCurrentPage(pageNumber);
          }}
        >
          {pageNumber}
        </div>
      );
    });
};

export default Pagination;
