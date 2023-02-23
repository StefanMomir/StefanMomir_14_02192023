import TableData from "./TableData";

const Table = ({ ...props }) => {
  /*SET PAGINATION VARIABLES */
  const currentPageIndex = Math.ceil(props.currentPage * props.resultsPerPage);
  const previousPageIndex = Math.ceil(currentPageIndex - props.resultsPerPage);
  const dataResults = props.dataResult?.slice(
    previousPageIndex,
    currentPageIndex
  );

  /* SORTING DATA */
  const sorting = (sortBy, order) => {
    if (order === "asc") {
      return (a, b) => {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      };
    } else {
      return (a, b) => {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      };
    }
  };

  return (
    <div className="sorting">
      {props.sortingTitle.map((sort, index) => {
        return (
          <div className="sorting-container" key={index}>
            <div
              className={
                props.sortBy === sort.name
                  ? "sorting-title after"
                  : "sorting-title"
              }
              data-sortby={sort.name}
              onClick={(e) => {
                props.setSortBy(sort.name);
              }}
            >
              {sort.title}
            </div>
            <div className="sorting-button"></div>
          </div>
        );
      })}
      {dataResults
        ?.sort(sorting(props.sortBy, props.order))
        .map((mainData, index) => {
          return <TableData mainData={mainData} key={index} />;
        })}
    </div>
  );
};

export default Table;
