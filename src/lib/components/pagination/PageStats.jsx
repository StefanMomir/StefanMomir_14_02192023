const pageStats = ({ ...props }) => {
  const pageIndex = Math.ceil(props.currentPage * props.resultsPerPage);
  const lastIndex = Math.ceil(parseInt(1) + (pageIndex - props.resultsPerPage));

  return (
    <div className="page-index">
      <p>
        Showing <span className="red"> {lastIndex} </span> to&nbsp;
        <span className="red">
          {pageIndex <= props.totalResults ? pageIndex : props.totalResults}
        </span>
        &nbsp;of
        <span className="red"> {props.totalResults} </span> entries
      </p>
    </div>
  );
};

export default pageStats;
